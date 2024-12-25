import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2023-10-16',
});

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');

serve(async (req) => {
  try {
    const signature = req.headers.get('stripe-signature');
    const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET');
    
    if (!signature || !webhookSecret) {
      return new Response('Missing signature or webhook secret', { status: 400 });
    }

    const body = await req.text();
    const event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    
    console.log('Processing webhook event:', event.type);

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const userId = session.metadata?.user_id;
      const amount = session.amount_total ? session.amount_total / 100 : 0;

      // Update transaction status
      const { error: transactionError } = await supabase
        .from('transactions')
        .update({ 
          status: 'completed',
          stripe_payment_intent_id: session.payment_intent,
          updated_at: new Date().toISOString()
        })
        .eq('user_id', userId)
        .eq('stripe_payment_intent_id', session.payment_intent);

      if (transactionError) {
        console.error('Error updating transaction:', transactionError);
        throw transactionError;
      }

      // Update user balance
      const { error: profileError } = await supabase.rpc('increment_balance', {
        user_id: userId,
        increment_amount: amount
      });

      if (profileError) {
        console.error('Error updating balance:', profileError);
        throw profileError;
      }

      // Send email receipt
      if (RESEND_API_KEY) {
        const { data: userData } = await supabase
          .from('profiles')
          .select('full_name')
          .eq('id', userId)
          .single();

        const emailHtml = `
          <h2>Deposit Confirmation</h2>
          <p>Dear ${userData?.full_name || 'Valued Customer'},</p>
          <p>Your deposit of $${amount.toFixed(2)} has been successfully processed.</p>
          <p>Transaction Details:</p>
          <ul>
            <li>Amount: $${amount.toFixed(2)}</li>
            <li>Date: ${new Date().toLocaleDateString()}</li>
            <li>Transaction ID: ${session.payment_intent}</li>
          </ul>
          <p>Thank you for choosing WealthGrid!</p>
        `;

        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${RESEND_API_KEY}`
          },
          body: JSON.stringify({
            from: 'WealthGrid <deposits@yourdomain.com>',
            to: [session.customer_details?.email || ''],
            subject: 'Deposit Confirmation - WealthGrid',
            html: emailHtml
          })
        });
      }
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200
    });
  } catch (error) {
    console.error('Webhook error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 400
    });
  }
});