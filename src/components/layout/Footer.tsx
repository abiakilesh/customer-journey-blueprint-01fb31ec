import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  shop: [
    { name: "All Products", href: "/products" },
    { name: "Sustainable Fashion", href: "/products?category=fashion" },
    { name: "Educational Toys", href: "/products?category=toys" },
    { name: "Office Supplies", href: "/products?category=office" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Clients", href: "/clients" },
    { name: "Feedback", href: "/feedback" },
    { name: "Contact", href: "/contact" },
  ],
  support: [
    { name: "Order Checklist", href: "/checklist" },
    { name: "Payment Options", href: "/payment" },
    { name: "Shipping Info", href: "/contact" },
    { name: "Returns Policy", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <span className="text-primary-foreground font-heading text-lg">E</span>
              </div>
              <span className="font-heading text-xl">Elevate</span>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Curating quality products for professionals, families, and businesses. 
              Sustainable, educational, and professional solutions for modern living.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="h-5 w-5" />
                <span>123 Commerce Street, New York, NY 10001</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="h-5 w-5" />
                <span>hello@elevate.store</span>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-heading text-lg mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-heading text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2026 Elevate. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
