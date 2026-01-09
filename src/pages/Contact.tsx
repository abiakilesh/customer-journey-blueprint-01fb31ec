import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "We respond within 24 hours",
    value: "hello@elevate.store",
    action: "mailto:hello@elevate.store",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri, 9am-6pm EST",
    value: "+1 (555) 123-4567",
    action: "tel:+15551234567",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Available 24/7",
    value: "Start a conversation",
    action: "#chat",
  },
];

const faqs = [
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day hassle-free return policy on all products. Items must be in original condition with tags attached.",
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping takes 5-7 business days. Express shipping (2-3 days) is available for an additional fee.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes! We ship to over 50 countries. International shipping times vary by location.",
  },
  {
    question: "Are your products sustainably sourced?",
    answer: "Absolutely. Every product meets our strict sustainability and ethical sourcing standards.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              We're Here to Help
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Have questions about products, orders, or partnerships? Our team is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <a
                key={method.title}
                href={method.action}
                className="group p-6 rounded-2xl bg-card shadow-soft hover:shadow-elevated transition-all duration-300 text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <method.icon className="h-7 w-7" />
                </div>
                <h3 className="font-heading text-xl mb-1">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                <p className="font-medium text-primary">{method.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div className="animate-fade-up">
              <h2 className="text-3xl font-heading mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a topic</option>
                    <option value="order">Order Inquiry</option>
                    <option value="product">Product Question</option>
                    <option value="return">Returns & Refunds</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <Button type="submit" variant="accent" size="lg" className="w-full md:w-auto">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl font-heading mb-6">Visit Our Office</h2>
              <div className="bg-background rounded-2xl p-6 shadow-soft mb-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Elevate Headquarters</p>
                      <p className="text-muted-foreground">123 Commerce Street, Suite 500</p>
                      <p className="text-muted-foreground">New York, NY 10001</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-muted-foreground">Monday - Friday: 9am - 6pm EST</p>
                      <p className="text-muted-foreground">Saturday: 10am - 4pm EST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <h3 className="text-xl font-heading mb-4 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                Quick Answers
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-background rounded-xl p-4">
                    <h4 className="font-medium mb-2">{faq.question}</h4>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
