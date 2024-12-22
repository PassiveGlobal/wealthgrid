import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Star, User, Award, Quote, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Investment Analyst",
    content: "PassiveGlobal has transformed how I manage my investments. The platform is intuitive and the returns are consistent. Their alternative investment options have helped me diversify my portfolio effectively.",
    rating: 5,
    badge: "Verified Investor",
  },
  {
    name: "Michael Chen",
    role: "Tech Entrepreneur",
    content: "I've tried many investment platforms, but PassiveGlobal stands out with its innovative approach and excellent customer service. The crypto custody solution gives me peace of mind.",
    rating: 5,
    badge: "Premium Member",
  },
  {
    name: "Emma Davis",
    role: "Financial Advisor",
    content: "The automated investment strategies have saved me countless hours. Highly recommended for busy professionals! The educational resources are particularly valuable for my clients.",
    rating: 5,
    badge: "Certified Advisor",
  },
  {
    name: "James Wilson",
    role: "Real Estate Developer",
    content: "PassiveGlobal's alternative investment options have opened up new opportunities for my portfolio. Their platform makes it easy to track and manage diverse investments.",
    rating: 5,
    badge: "Property Expert",
  },
  {
    name: "Lisa Thompson",
    role: "Crypto Enthusiast",
    content: "The crypto custody solution is exactly what I needed. It's secure, user-friendly, and integrates perfectly with my other investments. The 24/7 support is exceptional.",
    rating: 5,
    badge: "Early Adopter",
  },
  {
    name: "David Martinez",
    role: "Small Business Owner",
    content: "As someone new to investing, PassiveGlobal's educational resources and support team have been invaluable. The platform grows with you as you learn.",
    rating: 5,
    badge: "Growing Investor",
  },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">What Our Users Say</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of satisfied investors who trust PassiveGlobal with their financial future
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full bg-primary/5 border-none hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <User className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-secondary/10 px-2 py-1 rounded-full">
                      <BadgeCheck className="w-4 h-4 text-secondary" />
                      <span className="text-xs font-medium text-secondary">{testimonial.badge}</span>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  
                  <div className="relative">
                    <Quote className="w-8 h-8 text-secondary/20 absolute -top-2 -left-2" />
                    <p className="text-muted-foreground pl-6">{testimonial.content}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
            <Award className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium text-secondary">Trusted by over 10,000 investors worldwide</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;