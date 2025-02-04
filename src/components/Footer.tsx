import { Github, Instagram, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary/95 text-primary-foreground py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">WealthGrid</h3>
            <p className="text-sm text-primary-foreground/70">
              Your trusted partner in passive income generation and portfolio management.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/credit-card" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                  Credit Card
                </Link>
              </li>
              <li>
                <Link to="/learn" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                  Learn
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com/wealthgridai" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/105345127" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:info@wealthgrid.ai" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="text-center text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} WealthGrid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};