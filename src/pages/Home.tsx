import { Link } from "react-router-dom";
import { ArrowRight, Leaf, BookOpen, Briefcase, Star, Truck, Shield, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/assets/hero-image.jpg";

const categories = [
  {
    icon: Leaf,
    title: "Sustainable Fashion",
    description: "Ethically sourced, eco-friendly clothing for conscious professionals",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: BookOpen,
    title: "Educational Toys",
    description: "STEM-focused play for curious minds ages 3-8",
    color: "bg-accent/20 text-accent-foreground",
  },
  {
    icon: Briefcase,
    title: "Office Essentials",
    description: "Premium supplies for productive workspaces",
    color: "bg-secondary text-secondary-foreground",
  },
];

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $75",
  },
  {
    icon: Shield,
    title: "Secure Checkout",
    description: "256-bit SSL encryption",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "30-day hassle-free returns",
  },
  {
    icon: Star,
    title: "Quality Guaranteed",
    description: "Curated premium products",
  },
];

const featuredProducts = [
  { id: 1, name: "Organic Cotton Blazer", price: 189, category: "Fashion", rating: 4.9 },
  { id: 2, name: "Wooden Building Blocks Set", price: 45, category: "Toys", rating: 4.8 },
  { id: 3, name: "Executive Desk Organizer", price: 65, category: "Office", rating: 4.7 },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Curated collection of sustainable fashion, educational toys, and office supplies"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6 animate-fade-up">
              Curated for Modern Living
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-background leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Elevate Your Everyday with Thoughtful Products
            </h1>
            <p className="text-lg md:text-xl text-background/80 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Discover sustainable fashion, enriching educational toys, and premium office essentials—all in one place. Quality you can trust, values you can stand behind.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="accent" size="xl" asChild>
                <Link to="/products">
                  Explore Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 border-b border-border bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading mb-4">
              Three Worlds, One Destination
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you're dressing for success, nurturing young minds, or optimizing your workspace—we've curated the best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={category.title}
                to="/products"
                className="group p-8 rounded-2xl bg-card shadow-soft hover:shadow-elevated transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-xl ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <category.icon className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-2xl mb-3">{category.title}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <span className="inline-flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all">
                  Shop Now
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading mb-2">Customer Favorites</h2>
              <p className="text-muted-foreground">Top-rated products loved by our community</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/products">View All Products</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <span className="text-6xl font-heading opacity-20">{product.category[0]}</span>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/90 text-sm font-medium">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <h3 className="font-heading text-xl mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    <Button size="sm" variant="accent">Add to Cart</Button>
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-6">
            Ready to Elevate Your Everyday?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied customers who've discovered the difference quality makes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="accent" size="xl" asChild>
              <Link to="/products">
                Start Shopping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
