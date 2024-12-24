import { serve } from "https://deno.land/std@0.190.0/http/server.ts"
import Stripe from 'https://esm.sh/stripe@14.21.0'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.0'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2023-10-16',
})

serve(async (req) => {
  try {
    const signature = req.headers.get('stripe-signature')
    if (!signature) {
      throw new Error('No Stripe signature found')
    }

    const body = await req.text()
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      Deno.env.get('STRIPE_WEBHOOK_SECRET') || ''
    )

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    switch (event.type) {
      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        const { user_id } = paymentIntent.metadata

        // Update transaction status
        await supabaseClient
          .from('transactions')
          .update({ status: 'completed' })
          .eq('stripe_payment_intent_id', paymentIntent.id)

        // Update user balance
        const amount = paymentIntent.amount / 100 // Convert from cents
        await supabaseClient.rpc('update_user_balance', {
          p_user_id: user_id,
          p_amount: amount
        })

        // Create notification
        await supabaseClient
          .from('notifications')
          .insert({
            user_id,
            type: 'deposit',
            title: 'Deposit Successful',
            message: `Your deposit of $${amount.toFixed(2)} has been completed.`
          })

        break
      }
      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent

        // Update transaction status
        await supabaseClient
          .from('transactions')
          .update({ status: 'failed' })
          .eq('stripe_payment_intent_id', paymentIntent.id)

        // Create notification
        await supabaseClient
          .from('notifications')
          .insert({
            user_id: paymentIntent.metadata.user_id,
            type: 'deposit',
            title: 'Deposit Failed',
            message: 'Your deposit could not be processed. Please try again or contact support.'
          })

        break
      }
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400 }
    )
  }
})