import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function AIChat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello! I'm your AI investment assistant. I can help you with:\n• Market analysis and trends\n• Investment recommendations\n• Portfolio optimization\n• Profit-taking strategies"
    }
  ]);
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    const newMessage = { role: 'user' as const, content: message };
    setMessages(prev => [...prev, newMessage]);
    setMessage("");
    setIsLoading(true);

    try {
      // First check if user is authenticated
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      if (authError) throw authError;
      if (!user) throw new Error('Please log in to use the AI chat');

      console.log('Sending messages to AI chat function:', [...messages, newMessage]);
      const { data, error } = await supabase.functions.invoke('ai-chat', {
        body: {
          messages: [...messages, newMessage].map(({ role, content }) => ({
            role,
            content
          }))
        }
      });

      console.log('AI chat response:', data);
      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      if (!data?.choices?.[0]?.message?.content) {
        console.error('Invalid response format:', data);
        throw new Error('Invalid response format from AI');
      }

      const assistantMessage = {
        role: 'assistant' as const,
        content: data.choices[0].message.content
      };

      setMessages(prev => [...prev, assistantMessage]);

      // Store the interaction in the database
      const { error: dbError } = await supabase.from('ai_recommendations').insert({
        user_id: user.id,
        type: 'chat_interaction',
        title: 'AI Chat Interaction',
        description: message,
        recommendation_data: {
          user_message: message,
          ai_response: assistantMessage.content
        }
      });

      if (dbError) {
        console.error('Database error:', dbError);
        // Don't throw here as the chat message was successful
        toast({
          title: "Warning",
          description: "Chat message received but couldn't save to history.",
          variant: "destructive",
        });
      }

    } catch (error) {
      console.error('Error in AI chat:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to get AI response. Please try again.",
        variant: "destructive",
      });
      // Remove the user message if we couldn't get a response
      setMessages(prev => prev.slice(0, -1));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-5 w-5" />
          Investment Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg ${
                  msg.role === 'assistant'
                    ? 'bg-muted'
                    : 'bg-primary text-primary-foreground'
                }`}
              >
                <p className="text-sm whitespace-pre-line">{msg.content}</p>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
                Analyzing...
              </div>
            )}
          </div>
        </ScrollArea>
        <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask about market trends, strategies..."
            className="flex-1"
            disabled={isLoading}
          />
          <Button type="submit" size="icon" disabled={isLoading}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}