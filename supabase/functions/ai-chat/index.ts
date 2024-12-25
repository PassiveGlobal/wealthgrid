import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    console.log('Received messages:', messages);

    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openAIApiKey) {
      throw new Error('OpenAI API key is not configured');
    }

    console.log('Making request to OpenAI...');
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are an AI investment assistant. Provide concise, professional advice about market trends, investment opportunities, and portfolio management. Focus on educational content and general market analysis. Avoid making specific investment recommendations. Always encourage users to do their own research and consider consulting with financial advisors for personalized advice.'
          },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    const responseText = await response.text();
    console.log('OpenAI raw response:', responseText);
    
    if (!response.ok) {
      // Try to parse the error response as JSON
      let errorMessage = 'Unknown error occurred';
      try {
        const errorData = JSON.parse(responseText);
        errorMessage = errorData.error?.message || errorMessage;
      } catch {
        errorMessage = responseText;
      }

      // Check specifically for quota exceeded error
      if (errorMessage.includes('quota')) {
        console.error('OpenAI quota exceeded:', errorMessage);
        return new Response(
          JSON.stringify({ 
            error: 'quota_exceeded',
            message: 'The AI service is temporarily unavailable due to high demand. Please try again later or contact support.'
          }), {
            status: 429,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }

      console.error('OpenAI API error:', response.status, errorMessage);
      throw new Error(`OpenAI API error: ${response.status} ${errorMessage}`);
    }

    // Parse the successful response
    const data = JSON.parse(responseText);
    console.log('OpenAI parsed response:', data);

    if (!data.choices?.[0]?.message?.content) {
      console.error('Invalid response format from OpenAI:', data);
      throw new Error('Invalid response format from OpenAI');
    }

    return new Response(JSON.stringify({
      choices: [{
        message: {
          content: data.choices[0].message.content
        }
      }]
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in AI chat function:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: error.toString()
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});