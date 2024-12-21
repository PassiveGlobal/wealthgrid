import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Star, User } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Investor",
    content: "PassiveGlobal has transformed how I manage my investments. The platform is intuitive and the returns are consistent!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Entrepreneur",
    content: "I've tried many investment platforms, but PassiveGlobal stands out with its innovative approach and excellent customer service.",
    rating: 5,
  },
  {
    name: "Emma Davis",
    role: "Financial Analyst",
    content: "The automated investment strategies have saved me countless hours. Highly recommended for busy professionals!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-12">What Our Users Say</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-primary/5 border-none">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;