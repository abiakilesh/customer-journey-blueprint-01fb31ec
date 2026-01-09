import { Link } from "react-router-dom";
import { Heart, Target, Users, Award, Leaf, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const values = [
  {
    icon: Leaf,
    title: "Sustainability First",
    description: "Every product we source meets strict environmental and ethical standards.",
  },
  {
    icon: Heart,
    title: "Quality Without Compromise",
    description: "We believe in products that last, not trends that fade.",
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "Built by people, for people—supporting families and businesses alike.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Partnering with artisans and manufacturers who share our vision.",
  },
];

const team = [
  { name: "Sarah Chen", role: "Founder & CEO", bio: "Former sustainability consultant with 15 years in ethical retail." },
  { name: "Marcus Williams", role: "Head of Product", bio: "Parent of three, passionate about educational play and child development." },
  { name: "Elena Rodriguez", role: "Operations Director", bio: "Supply chain expert focused on transparent, ethical sourcing." },
];

const stats = [
  { value: "50K+", label: "Happy Customers" },
  { value: "500+", label: "Curated Products" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "12", label: "Countries Served" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Building a Better Way to Shop
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-up" style={{ animationDelay: "0.2s" }}>
              We started Elevate with a simple belief: the products we use every day should reflect our values. Quality, sustainability, and purpose—these aren't just buzzwords to us. They're our foundation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-wide">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading mb-6">
                Empowering Conscious Choices for Professionals, Parents & Businesses
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We curate products that make a difference—sustainable fashion for the modern professional, educational toys that spark curiosity in young minds, and office essentials that help businesses thrive responsibly.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Every product in our collection is vetted for quality, ethics, and purpose. When you shop with Elevate, you're not just buying products—you're investing in a better future.
              </p>
              <Button variant="accent" size="lg" asChild>
                <Link to="/products">Explore Our Collection</Link>
              </Button>
            </div>
            <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="aspect-square rounded-3xl bg-gradient-hero opacity-10 absolute inset-0" />
              <div className="aspect-square rounded-3xl bg-card shadow-elevated flex items-center justify-center">
                <div className="text-center p-8">
                  <Award className="h-16 w-16 text-accent mx-auto mb-4" />
                  <h3 className="font-heading text-2xl mb-2">B-Corp Certified</h3>
                  <p className="text-muted-foreground">Meeting the highest standards of social and environmental performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">
              These principles guide every decision we make, from product selection to customer service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-background shadow-soft animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-28 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-heading mb-2">{stat.value}</div>
                <div className="text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading mb-4">Meet the Team</h2>
            <p className="text-lg text-muted-foreground">
              Passionate people building something meaningful.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-hero flex items-center justify-center">
                  <span className="text-4xl font-heading text-primary-foreground">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-heading text-xl mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-6">Want to Learn More?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            We'd love to hear from you. Whether you have questions, feedback, or just want to say hello—our team is here.
          </p>
          <Button variant="accent" size="xl" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
