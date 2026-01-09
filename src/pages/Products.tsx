import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, Filter, Grid, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { cn } from "@/lib/utils";

const products = [
  { id: 1, name: "Organic Cotton Blazer", price: 189, category: "Fashion", rating: 4.9, reviews: 128, tag: "Bestseller" },
  { id: 2, name: "Wooden Building Blocks Set", price: 45, category: "Toys", rating: 4.8, reviews: 89, tag: "Educational" },
  { id: 3, name: "Executive Desk Organizer", price: 65, category: "Office", rating: 4.7, reviews: 56 },
  { id: 4, name: "Bamboo Dress Shirt", price: 79, category: "Fashion", rating: 4.6, reviews: 203 },
  { id: 5, name: "STEM Coding Robot Kit", price: 129, category: "Toys", rating: 4.9, reviews: 167, tag: "Top Rated" },
  { id: 6, name: "Ergonomic Bamboo Keyboard", price: 95, category: "Office", rating: 4.5, reviews: 78 },
  { id: 7, name: "Recycled Denim Jacket", price: 145, category: "Fashion", rating: 4.8, reviews: 92, tag: "Sustainable" },
  { id: 8, name: "Montessori Learning Tower", price: 189, category: "Toys", rating: 4.9, reviews: 145 },
  { id: 9, name: "Cork Document Holder", price: 35, category: "Office", rating: 4.4, reviews: 34 },
  { id: 10, name: "Linen Work Trousers", price: 110, category: "Fashion", rating: 4.7, reviews: 67, tag: "New" },
];

const categories = ["All", "Fashion", "Toys", "Office"];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 lg:py-16 bg-gradient-surface border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-4 animate-fade-up">
              Our Curated Collection
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Discover thoughtfully selected products for sustainable fashion, educational play, and professional workspaces.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Filter by:</span>
              <div className="flex gap-2 ml-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all",
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Grid className="h-5 w-5" />
              <span className="text-sm">{filteredProducts.length} Products</span>
            </div>
          </div>

          {/* Product Grid - 3x3 + 1 Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${(index % 3) * 0.1}s` }}
              >
                {/* Product Image */}
                <div className="aspect-square bg-secondary relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-7xl font-heading text-muted-foreground/20">
                      {product.category[0]}
                    </span>
                  </div>
                  
                  {/* Tags */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-background/90 text-xs font-medium">
                      {product.category}
                    </span>
                    {product.tag && (
                      <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                        {product.tag}
                      </span>
                    )}
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-10 h-10 rounded-full bg-background shadow-soft flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Heart className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Quick Add */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
                    <Button variant="accent" className="w-full" asChild>
                      <Link to="/checklist">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                  <h3 className="font-heading text-xl mb-3 group-hover:text-primary transition-colors">
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    <Button size="sm" variant="outline" asChild>
                      <Link to={`/products/${product.id}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SEO-friendly product summary */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our complete selection of sustainable fashion pieces, STEM-focused educational toys for ages 3-8, 
              and eco-friendly office supplies. All products are ethically sourced and quality guaranteed.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
