import PricingCard from "@/components/PricingCard";
import DownloadButton from "@/components/DownloadButton";

const packages = [
  {
    name: "First Meet",
    bestFor: "First-time brands, small tests",
    featured: false,
    features: [
      { label: "Published on 1 platform, 1 channel", included: true },
      { label: "30-day visibility uptime", included: true },
      { label: "Extension available (paid add-on)", included: true },
      { label: "Client cannot repost on own channels", included: false },
      { label: "Multi-platform distribution", included: false },
    ],
    cta: { label: "Get Started", to: "/contact" },
  },
  {
    name: "The Promotion",
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

const Packages = () => (
  <div className="container py-20">
    <div className="text-center">
      <h1 className="font-heading text-4xl font-bold md:text-5xl">
        Promotion <span className="text-gradient">Packages</span>
      </h1>
      <p className="mt-3 text-muted-foreground">
        Choose the plan that fits your goals. All prices in LKR.
      </p>
    </div>

    <div className="mt-14 grid gap-8 md:grid-cols-3">
      {packages.map((pkg) => (
        <PricingCard key={pkg.name} {...pkg} />
      ))}
    </div>

    {/* Notes */}
    <div className="mt-12 rounded-xl border border-border/50 bg-card/50 p-6">
      <h3 className="font-heading text-lg font-semibold">Important Notes</h3>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        <li>• All prices are quoted in <strong className="text-foreground">Sri Lankan Rupees (LKR)</strong>.</li>
        <li>• <strong className="text-foreground">Video uptime</strong> means how long the promotion remains publicly visible on my channels.</li>
        <li>• <strong className="text-foreground">Extensions</strong> are paid add-ons if you wish to keep the promotion live beyond 30 days.</li>
        <li>• For <em>First Meet</em>, the client cannot publish/repost the promotion on their own channels.</li>
        <li>• For <em>The Promotion</em>, the client may repost anywhere within 30 days.</li>
      </ul>
    </div>

    {/* Downloads */}
    <div className="mt-8 flex flex-wrap gap-4">
      <DownloadButton href="/print/price-list" label="Download Price List" version="1.0" lastUpdated="Feb 2026" />
      <DownloadButton href="/print/terms" label="Download T&C" version="1.0" lastUpdated="Feb 2026" />
    </div>
  </div>
);

export default Packages;
