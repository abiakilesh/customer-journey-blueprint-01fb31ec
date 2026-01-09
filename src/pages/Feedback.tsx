import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, ThumbsUp, MessageSquare, Filter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const reviews = [
  {
    id: 1,
    author: "Amanda R.",
    rating: 5,
    date: "2 days ago",
    product: "Organic Cotton Blazer",
    category: "Fashion",
    title: "Exceeded all expectations!",
    content: "The quality is incredible. I've worn this blazer to three important meetings and received compliments every time. Knowing it's sustainably made makes it even better.",
    helpful: 24,
    verified: true,
  },
  {
    id: 2,
    author: "James & Lisa K.",
    rating: 5,
    date: "1 week ago",
    product: "STEM Coding Robot Kit",
    category: "Toys",
    title: "Our 6-year-old is obsessed!",
    content: "We were looking for screen-free activities that still teach tech skills. This robot kit is perfect! Our daughter spends hours building and problem-solving. Worth every penny.",
    helpful: 45,
    verified: true,
  },
  {
    id: 3,
    author: "Thomas B.",
    rating: 4,
    date: "2 weeks ago",
    product: "Executive Desk Organizer",
    category: "Office",
    title: "Great quality, minor suggestion",
    content: "Beautiful piece that's transformed my workspace. Wish it had one more compartment for pens, but overall very happy with the purchase.",
    helpful: 12,
    verified: true,
  },
  {
    id: 4,
    author: "Sarah M.",
    rating: 5,
    date: "3 weeks ago",
    product: "Bamboo Dress Shirt",
    category: "Fashion",
    title: "Softest shirt I've ever owned",
    content: "The bamboo fabric is unbelievably soft and breathable. Perfect for long workdays. Already ordered two more!",
    helpful: 38,
    verified: true,
  },
  {
    id: 5,
    author: "The Wilson Family",
    rating: 5,
    date: "1 month ago",
    product: "Wooden Building Blocks Set",
    category: "Toys",
    title: "Heirloom quality",
    content: "These aren't just toys—they're investment pieces. The craftsmanship is stunning, and I know we'll be passing these down to grandchildren someday.",
    helpful: 56,
    verified: true,
  },
];

const ratingStats = {
  average: 4.8,
  total: 2847,
  breakdown: [
    { stars: 5, percentage: 78 },
    { stars: 4, percentage: 15 },
    { stars: 3, percentage: 5 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 1 },
  ],
};

const categories = ["All", "Fashion", "Toys", "Office"];

export default function Feedback() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [feedbackText, setFeedbackText] = useState("");
  const { toast } = useToast();

  const filteredReviews = selectedCategory === "All"
    ? reviews
    : reviews.filter(r => r.category === selectedCategory);

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your feedback!",
      description: "We appreciate you taking the time to share your thoughts.",
    });
    setFeedbackText("");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 lg:py-16 bg-gradient-surface border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-4">
                What Our Customers Say
              </h1>
              <p className="text-lg text-muted-foreground">
                Real reviews from real customers. See why thousands trust Elevate for their everyday essentials.
              </p>
            </div>

            {/* Rating Summary */}
            <div className="bg-card rounded-2xl p-8 shadow-soft animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center gap-6 mb-6">
                <div className="text-center">
                  <div className="text-5xl font-heading text-primary">{ratingStats.average}</div>
                  <div className="flex gap-1 mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={cn(
                          "h-5 w-5",
                          star <= Math.round(ratingStats.average)
                            ? "fill-accent text-accent"
                            : "text-muted"
                        )}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{ratingStats.total.toLocaleString()} reviews</p>
                </div>
                <div className="flex-1 space-y-2">
                  {ratingStats.breakdown.map((item) => (
                    <div key={item.stars} className="flex items-center gap-2">
                      <span className="text-sm w-8">{item.stars}★</span>
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-accent rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-10">{item.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filter Bar */}
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-border">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Filter:</span>
            <div className="flex gap-2">
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

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((review, index) => (
              <div
                key={review.id}
                className="bg-card rounded-2xl p-6 shadow-soft animate-fade-up"
                style={{ animationDelay: `${(index % 3) * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={cn(
                            "h-4 w-4",
                            star <= review.rating ? "fill-accent text-accent" : "text-muted"
                          )}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                  {review.verified && (
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      Verified
                    </span>
                  )}
                </div>

                {/* Content */}
                <h3 className="font-heading text-lg mb-2">{review.title}</h3>
                <p className="text-muted-foreground mb-4">{review.content}</p>

                {/* Product & Author */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2">
                    Product: <span className="text-foreground font-medium">{review.product}</span>
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="font-medium">{review.author}</p>
                    <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{review.helpful}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Feedback Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <MessageSquare className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading mb-4">Share Your Experience</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Your feedback helps us improve and helps other customers make informed decisions.
            </p>

            <form onSubmit={handleSubmitFeedback} className="text-left">
              <textarea
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                placeholder="Tell us about your experience with Elevate products..."
                className="w-full h-32 p-4 rounded-xl border border-border bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary mb-4"
                required
              />
              <Button type="submit" variant="accent" size="lg" className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Submit Feedback
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied customers and discover why they choose Elevate.
          </p>
          <Button variant="accent" size="xl" asChild>
            <Link to="/products">Shop Now</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
