import { Check, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PricingCardProps {
  name: string;
  price: string;
  priceNote?: string;
  bestFor: string;
  features: { label: string; included: boolean }[];
  cta: { label: string; to: string };
  featured?: boolean;
}

const PricingCard = ({ name, price, priceNote, bestFor, features, cta, featured }: PricingCardProps) => (
  <div
    className={`relative flex flex-col rounded-2xl border p-8 transition-all ${
      featured
        ? "border-primary/50 bg-card glow-primary"
        : "border-border/50 bg-card hover:border-primary/30"
    }`}
  >
    {featured && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
          <Star size={12} /> Most Popular
        </span>
      </div>
    )}

    <h3 className="font-heading text-4xl font-bold text-gradient">{name}</h3>
    <p className="mt-2 text-sm text-muted-foreground">Best for: {bestFor}</p>

    <ul className="mt-6 flex-1 space-y-3">
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-2 text-sm">
          {f.included ? (
            <Check size={16} className="mt-0.5 shrink-0 text-primary" />
          ) : (
            <X size={16} className="mt-0.5 shrink-0 text-muted-foreground/50" />
          )}
          <span className={f.included ? "text-foreground" : "text-muted-foreground/60"}>{f.label}</span>
        </li>
      ))}
    </ul>

    <Link to={cta.to} className="mt-8">
      <Button variant={featured ? "hero" : "hero-outline"} className="w-full" size="lg">
        {cta.label}
      </Button>
    </Link>
  </div>
);

export default PricingCard;
