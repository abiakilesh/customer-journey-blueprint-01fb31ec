import { useState } from "react";
import { Link } from "react-router-dom";
import { CreditCard, Lock, Check, ChevronRight, Shield, Truck, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const paymentMethods = [
  { id: "card", name: "Credit Card", icon: CreditCard, description: "Visa, Mastercard, Amex" },
  { id: "paypal", name: "PayPal", icon: Shield, description: "Fast & secure checkout" },
  { id: "affirm", name: "Pay Later", icon: Truck, description: "Split into 4 payments" },
];

const orderItems = [
  { id: 1, name: "Organic Cotton Blazer", price: 189, quantity: 1 },
  { id: 2, name: "STEM Coding Robot Kit", price: 129, quantity: 2 },
  { id: 3, name: "Cork Document Holder", price: 35, quantity: 1 },
];

export default function Payment() {
  const [selectedMethod, setSelectedMethod] = useState("card");
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    if (e.target.name === "cardNumber") {
      value = value.replace(/\D/g, "").slice(0, 16);
      value = value.replace(/(\d{4})/g, "$1 ").trim();
    }
    if (e.target.name === "expiry") {
      value = value.replace(/\D/g, "").slice(0, 4);
      if (value.length >= 2) {
        value = value.slice(0, 2) + "/" + value.slice(2);
      }
    }
    if (e.target.name === "cvv") {
      value = value.replace(/\D/g, "").slice(0, 4);
    }

    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsProcessing(false);
    toast({
      title: "Order Confirmed!",
      description: "Thank you for your purchase. Check your email for confirmation.",
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-8 lg:py-12 bg-gradient-surface border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <Link to="/checklist" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Checklist
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <Lock className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-heading">Secure Checkout</h1>
              <p className="text-muted-foreground">Your payment is protected with 256-bit SSL encryption</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Payment Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Payment Method Selection */}
                <div className="animate-fade-up">
                  <h2 className="text-xl font-heading mb-4">Payment Method</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    {paymentMethods.map((method) => (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setSelectedMethod(method.id)}
                        className={cn(
                          "p-4 rounded-xl border-2 text-left transition-all",
                          selectedMethod === method.id
                            ? "border-primary bg-primary/5"
                            : "border-border bg-card hover:border-primary/50"
                        )}
                      >
                        <method.icon className={cn("h-6 w-6 mb-2", selectedMethod === method.id ? "text-primary" : "text-muted-foreground")} />
                        <p className="font-medium">{method.name}</p>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Card Details */}
                {selectedMethod === "card" && (
                  <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                    <h2 className="text-xl font-heading">Card Details</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-2">Card Number</label>
                        <div className="relative">
                          <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            placeholder="1234 5678 9012 3456"
                            className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary pl-12"
                            required
                          />
                          <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Expiry Date</label>
                        <input
                          type="text"
                          name="expiry"
                          value={formData.expiry}
                          onChange={handleChange}
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                          placeholder="123"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-2">Cardholder Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Billing Address */}
                <div className="space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                  <h2 className="text-xl font-heading">Billing Address</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">Street Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="123 Main Street"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="New York"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">ZIP Code</label>
                      <input
                        type="text"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        placeholder="10001"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  variant="accent"
                  size="xl"
                  className="w-full"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin">⏳</span>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Lock className="h-5 w-5" />
                      Pay ${total.toFixed(2)}
                    </span>
                  )}
                </Button>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-5 w-5 text-primary" />
                    <span>SSL Secured</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-5 w-5 text-primary" />
                    <span>PCI Compliant</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Lock className="h-5 w-5 text-primary" />
                    <span>Encrypted</span>
                  </div>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-6 shadow-soft sticky top-24 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <h3 className="font-heading text-xl mb-6">Order Summary</h3>

                <div className="space-y-4 mb-6">
                  {orderItems.map((item) => (
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
                    <span className="text-primary">FREE</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xl font-heading pt-4 border-t border-border">
                    <span>Total</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="mt-6 pt-6 border-t border-border">
                  <button className="w-full text-left flex items-center justify-between text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <span>Have a promo code?</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
