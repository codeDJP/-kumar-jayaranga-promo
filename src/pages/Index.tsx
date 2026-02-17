import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Eye, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import DownloadButton from "@/components/DownloadButton";
import PricingCard from "@/components/PricingCard";

const packages = [
  {
    name: "First Meet",
    price: "LKR 20,000",
    bestFor: "First-time brands, small tests",
    featured: false,
    features: [
      { label: "Published on 1 platform, 1 channel", included: true },
      { label: "30-day visibility uptime", included: true },
      { label: "Extension available (paid add-on)", included: true },
      { label: "Client repost rights", included: false },
      { label: "Multi-platform distribution", included: false },
    ],
    cta: { label: "Get Started", to: "/contact" },
  },
  {
    name: "The Promotion",
    price: "LKR 100,000",
    bestFor: "Full reach, stronger brand impact",
    featured: true,
    features: [
      { label: "Published on all platforms & channels", included: true },
      { label: "30-day visibility uptime", included: true },
      { label: "Client can repost anywhere (30 days)", included: true },
      { label: "Extension available (paid add-on)", included: true },
      { label: "Maximum exposure & reach", included: true },
    ],
    cta: { label: "Book Now", to: "/contact" },
  },
  {
    name: "Move Around",
    price: "Custom",
    priceNote: "Get a quote",
    bestFor: "Flexible partnerships, long-term deals",
    featured: false,
    features: [
      { label: "Custom platform mix & duration", included: true },
      { label: "Tailored deliverables & scope", included: true },
      { label: "Royalty & revenue-share options", included: true },
      { label: "Long-term brand partnerships", included: true },
      { label: "Fully negotiable terms", included: true },
    ],
    cta: { label: "Request a Quote", to: "/contact" },
  },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="container relative z-10 flex flex-col items-center py-32 text-center md:py-44">
          <h1 className="animate-fade-in-up font-heading text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Tech, Science &amp; Education
            <br />
            <span className="text-gradient">Promotions</span>
          </h1>
          <p className="mt-6 max-w-2xl animate-fade-in-up text-lg text-muted-foreground [animation-delay:0.15s]" style={{ opacity: 0 }}>
            Exploring the intersection of Technology, Science, and the Education.
            <br className="hidden sm:block" />
            Professional video promotion packages for Sri Lankan businesses.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in-up [animation-delay:0.3s]" style={{ opacity: 0 }}>
            <Link to="/packages">
              <Button variant="hero" size="lg">
                <Eye size={18} /> View Packages
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="hero-outline" size="lg">
                <Phone size={18} /> Contact / Book
              </Button>
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4 animate-fade-in-up [animation-delay:0.45s]" style={{ opacity: 0 }}>
            <DownloadButton
              href="/#/print/price-list"
              label="Download Price List"
              variant="outline"
              size="sm"
            />
            <DownloadButton
              href="/#/print/terms"
              label="Download T&C"
              variant="outline"
              size="sm"
            />
          </div>
        </div>
      </section>

      {/* Packages preview */}
      <section className="container py-24">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Choose Your <span className="text-gradient">Package</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Transparent pricing in LKR. No hidden fees.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {packages.map((pkg) => (
            <PricingCard key={pkg.name} {...pkg} />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          All prices are in LKR · Video uptime = how long the promotion remains publicly visible · Extensions are paid add-ons
        </p>
      </section>

      {/* CTA */}
      <section className="border-t border-border/50 bg-card/30">
        <div className="container flex flex-col items-center gap-6 py-20 text-center">
          <h2 className="font-heading text-3xl font-bold">Ready to Promote?</h2>
          <p className="max-w-md text-muted-foreground">
            Get in touch today and let's create something impactful for your brand.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Get Started <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
