import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Circle, ArrowRight, Package, CreditCard, User, MapPin, ShieldCheck, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { cn } from "@/lib/utils";

const checklistItems = [
  {
    id: "account",
    icon: User,
    title: "Create or Sign Into Your Account",
    description: "Save your preferences and track orders easily",
    tip: "Guest checkout is also available if you prefer",
  },
  {
    id: "cart",
    icon: Package,
    title: "Review Your Cart",
    description: "Ensure quantities and sizes are correct",
    tip: "Check for any available discounts or promotions",
  },
  {
    id: "shipping",
    icon: MapPin,
    title: "Confirm Shipping Address",
    description: "Double-check your delivery address is accurate",
    tip: "Different billing and shipping addresses are supported",
  },
  {
    id: "payment",
    icon: CreditCard,
    title: "Select Payment Method",
    description: "Choose from credit card, PayPal, or other options",
    tip: "All transactions are secured with 256-bit SSL encryption",
  },
  {
    id: "review",
    icon: ShieldCheck,
    title: "Final Review & Confirmation",
    description: "Review your complete order before placing it",
    tip: "You'll receive an email confirmation immediately",
  },
];

const cartItems = [
  { id: 1, name: "Organic Cotton Blazer", price: 189, quantity: 1, category: "Fashion" },
  { id: 2, name: "STEM Coding Robot Kit", price: 129, quantity: 2, category: "Toys" },
  { id: 3, name: "Cork Document Holder", price: 35, quantity: 1, category: "Office" },
];

export default function Checklist() {
  const [completedItems, setCompletedItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setCompletedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 75 ? 0 : 9.99;
  const total = subtotal + shipping;

  const progress = (completedItems.length / checklistItems.length) * 100;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 lg:py-16 bg-gradient-surface border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-4 animate-fade-up">
              Order Checklist
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Complete these steps to ensure a smooth checkout experience. Mark each item as you go.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Checklist */}
            <div className="lg:col-span-2">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Checkout Progress</span>
                  <span className="text-sm text-muted-foreground">{completedItems.length} of {checklistItems.length} complete</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-accent rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Checklist Items */}
              <div className="space-y-4">
                {checklistItems.map((item, index) => {
                  const isCompleted = completedItems.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleItem(item.id)}
                      className={cn(
                        "w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 animate-fade-up",
                        isCompleted
                          ? "border-primary bg-primary/5"
                          : "border-border bg-card hover:border-primary/50"
                      )}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                            isCompleted ? "bg-primary text-primary-foreground" : "bg-muted"
                          )}
                        >
                          {isCompleted ? (
                            <Check className="h-5 w-5" />
                          ) : (
                            <Circle className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <item.icon className={cn("h-5 w-5", isCompleted ? "text-primary" : "text-muted-foreground")} />
                            <h3 className={cn("font-heading text-lg", isCompleted && "text-primary")}>
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-muted-foreground mb-2">{item.description}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Info className="h-4 w-4" />
                            <span>{item.tip}</span>
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Action */}
              <div className="mt-8 pt-8 border-t border-border">
                <Button
                  variant="accent"
                  size="xl"
                  className="w-full md:w-auto"
                  disabled={completedItems.length < checklistItems.length}
                  asChild
                >
                  <Link to="/payment">
                    Proceed to Payment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                {completedItems.length < checklistItems.length && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Complete all checklist items to proceed
                  </p>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-6 shadow-soft sticky top-24 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <h3 className="font-heading text-xl mb-6">Order Summary</h3>

                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-lg font-heading pt-2 border-t border-border">
                    <span>Total</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>

                {shipping === 0 && (
                  <p className="text-sm text-primary mt-4 flex items-center gap-2">
                    <Check className="h-4 w-4" />
                    You qualified for free shipping!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
