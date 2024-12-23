import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 bg-primary/5 rounded-lg">
              <Mail className="w-8 h-8 text-secondary mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <a 
                href="mailto:info@wealthgrid.ai" 
                className="text-muted-foreground hover:text-secondary transition-colors"
              >
                info@wealthgrid.ai
              </a>
            </div>
            <div className="flex flex-col items-center p-6 bg-primary/5 rounded-lg">
              <Phone className="w-8 h-8 text-secondary mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <a 
                href="tel:+13104985204" 
                className="text-muted-foreground hover:text-secondary transition-colors"
              >
                (310) 498-5204
              </a>
            </div>
            <div className="flex flex-col items-center p-6 bg-primary/5 rounded-lg">
              <MapPin className="w-8 h-8 text-secondary mb-4" />
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-muted-foreground text-center">
                57 W 57th Street<br />New York, NY
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-primary/5 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">Subject</label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="min-h-[150px]"
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;