import { Link } from "react-router-dom";
import { Quote, ArrowRight, Building2, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const clientSegments = [
  {
    icon: Briefcase,
    title: "Young Professionals",
    description: "Career-focused individuals aged 25-40 who value sustainable fashion choices that reflect their values.",
    testimonial: {
      quote: "Elevate has transformed my work wardrobe. I finally feel good about what I wear to the office—both how it looks and how it's made.",
      author: "Jessica M.",
      role: "Marketing Director, Tech Startup",
    },
  },
  {
    icon: Users,
    title: "Mindful Parents",
    description: "Parents seeking educational, safe, and enriching toys that support their children's development ages 3-8.",
    testimonial: {
      quote: "My kids are obsessed with the building blocks set! It's rare to find toys that are both educational and screen-free. These have been a game-changer for creative play.",
      author: "Michael & Sarah T.",
      role: "Parents of 3",
    },
  },
  {
    icon: Building2,
    title: "Small Business Owners",
    description: "Entrepreneurs and business owners looking for quality office supplies that elevate their workspace.",
    testimonial: {
      quote: "We outfitted our entire office with Elevate products. The quality is outstanding, and our team loves knowing we're supporting sustainable brands.",
      author: "David Chen",
      role: "Founder, Design Agency",
    },
  },
];

const caseStudies = [
  {
    company: "GreenTech Solutions",
    industry: "Technology",
    challenge: "Needed to outfit 50 employees with sustainable workwear for a rebrand",
    solution: "Custom corporate wardrobe collection with organic cotton blazers and accessories",
    result: "87% employee satisfaction increase, featured in industry sustainability report",
  },
  {
    company: "Little Minds Academy",
    industry: "Education",
    challenge: "Required engaging, educational toys for multiple classrooms",
    solution: "Curated STEM toy collection for different age groups and learning objectives",
    result: "30% increase in focused play time, parent engagement up by 45%",
  },
];

export default function Clients() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
              Our Community
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Success Stories From Our Valued Clients
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Discover how professionals, families, and businesses are elevating their everyday with thoughtfully curated products.
            </p>
          </div>
        </div>
      </section>

      {/* Client Segments */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {clientSegments.map((segment, index) => (
              <div
                key={segment.title}
                className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <segment.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-2xl mb-3">{segment.title}</h3>
                <p className="text-muted-foreground mb-8">{segment.description}</p>
                
                <div className="bg-secondary rounded-2xl p-6">
                  <Quote className="h-8 w-8 text-accent/50 mb-4" />
                  <p className="text-foreground italic mb-4">"{segment.testimonial.quote}"</p>
                  <div>
                    <p className="font-medium">{segment.testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{segment.testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading mb-4">Featured Case Studies</h2>
            <p className="text-lg text-muted-foreground">
              Real results from real partnerships.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <div
                key={study.company}
                className="bg-background rounded-2xl p-8 shadow-soft animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center">
                    <span className="text-2xl font-heading text-primary-foreground">
                      {study.company.split(" ").map(w => w[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl">{study.company}</h3>
                    <p className="text-sm text-muted-foreground">{study.industry}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-primary mb-1">Challenge</h4>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-primary mb-1">Solution</h4>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <h4 className="text-sm font-medium text-accent mb-1">Result</h4>
                    <p className="font-medium">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Whether you're shopping for yourself, your family, or your business—we're here to help you find the perfect products.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="accent" size="xl" asChild>
              <Link to="/products">
                Browse Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
