import { serve } from "https://deno.land/std@0.190.0/http/server.ts"
import Stripe from 'https://esm.sh/stripe@14.21.0'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { amount, bank_account_id } = await req.json()

    if (!amount || !bank_account_id) {
      throw new Error('Amount and bank account ID are required')
    }

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    )

    // Get the user from the request
    const authHeader = req.headers.get('Authorization')!
    const token = authHeader.replace('Bearer ', '')
    const { data: { user } } = await supabaseClient.auth.getUser(token)

    if (!user) {
      throw new Error('Not authenticated')
    }

    // Get bank account details
    const { data: bankAccount, error: bankAccountError } = await supabaseClient
      .from('bank_accounts')
      .select('*')
      .eq('id', bank_account_id)
      .eq('user_id', user.id)
      .single()

    if (bankAccountError || !bankAccount) {
      throw new Error('Bank account not found')
    }

    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
      apiVersion: '2023-10-16',
    })

    // Create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: 'usd',
      payment_method_types: ['ach_debit'],
      metadata: {
        bank_account_id,
        user_id: user.id,
      },
    })

    // Create a transaction record
    const { error: transactionError } = await supabaseClient
      .from('transactions')
      .insert({
        user_id: user.id,
        amount,
        type: 'deposit',
        status: 'pending',
        payment_method: 'ach_debit',
        currency: 'usd',
        stripe_payment_intent_id: paymentIntent.id,
        bank_account_id,
      })

    if (transactionError) {
      throw transactionError
    }

    return new Response(
      JSON.stringify({ 
        client_secret: paymentIntent.client_secret,
        payment_intent_id: paymentIntent.id,
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
    )
  }
})