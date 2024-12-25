import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
      // Simulate AI response - In production, this would call your AI endpoint
      setTimeout(() => {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: "Based on current market trends, I recommend considering gold allocation due to increasing market volatility. Would you like me to analyze specific investment opportunities?"
        }]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get AI response. Please try again.",
        variant: "destructive",
      });
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