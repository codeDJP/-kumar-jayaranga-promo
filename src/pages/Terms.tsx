import DownloadButton from "@/components/DownloadButton";

const sections = [
  {
    title: "1. Payment & Invoicing",
    content: `All prices are quoted in Sri Lankan Rupees (LKR). Payment must be completed in full before the promotion goes live, unless a custom arrangement has been agreed in writing. Invoices are issued by Tringledo (Pvt) Ltd. Payment methods and banking details will be provided upon booking.`,
  },
  {
    title: "2. Approval Process",
    content: `Where applicable, clients must submit a script or content outline for review before production begins. Approval or revision requests must be communicated within 3 business days. Once a script is approved in writing, the production phase begins.`,
  },
  {
    title: "3. Publishing Rules by Package",
    content: `• First Meet (LKR 20,000): The promotion is published on 1 platform / 1 channel only. The video remains publicly visible for 30 days. The client does not have the right to repost or publish the promotion on their own channels.\n\n• The Promotion (LKR 100,000): The promotion is published across all available platforms and channels. The video remains publicly visible for 30 days. The client is granted the right to repost or publish the promotion on their own channels for the duration of the 30-day uptime.\n\n• Move Around (Custom): Platform mix, duration, and deliverables are agreed upon in writing. Terms are fully negotiable and may include royalty, revenue-share, or long-term brand partnership arrangements.`,
  },
  {
    title: "4. Extension Policy",
    content: `After the 30-day visibility period, promotions will be taken down or made private. Clients who wish to extend the uptime must pay an extension fee, which will be quoted at the time of the extension request. Extensions are not automatic and must be booked in advance.`,
  },
  {
    title: "5. Revisions",
    content: `Each package includes a limited number of revisions (typically up to 2 rounds). Revision requests must be submitted within 5 business days of receiving the draft. Additional revisions beyond the included limit may incur extra charges.`,
  },
  {
    title: "6. Usage Rights",
    content: `Client repost/reuse permission is only granted under "The Promotion" package (LKR 100,000) and is limited to the 30-day uptime window. After the uptime expires, reuse rights also expire unless a separate agreement is made. For "First Meet," all distribution rights remain exclusively with Kumar Jayaranga / Tringledo (Pvt) Ltd.`,
  },
  {
    title: "7. Content Restrictions & Brand Safety",
    content: `We reserve the right to decline any promotion request that involves content deemed harmful, misleading, illegal, discriminatory, or otherwise in violation of community guidelines of the platforms used. Brand safety is paramount; we will not publish content that could damage either party's reputation.`,
  },
  {
    title: "8. Removal Policy After Uptime",
    content: `Once the agreed-upon visibility period expires, the promotion will be removed, unlisted, or made private at our discretion. If the client requires immediate removal before the uptime expires, they must submit a written request. Early removal does not entitle the client to a refund.`,
  },
  {
    title: "9. Liability & Disclaimers",
    content: `Kumar Jayaranga and Tringledo (Pvt) Ltd are not liable for any indirect, incidental, or consequential damages arising from the promotion. Performance results (views, clicks, conversions) are not guaranteed. Platform algorithm changes, policy updates, or force majeure events may impact reach and visibility.`,
  },
];

const Terms = () => (
  <div className="container max-w-3xl py-20">
    <h1 className="font-heading text-4xl font-bold md:text-5xl">
      Terms &amp; <span className="text-gradient">Conditions</span>
    </h1>
    <p className="mt-3 text-muted-foreground">
      Please read these terms carefully before booking any promotion package.
    </p>

    <div className="mt-6">
      <DownloadButton
        href="/print/terms"
        label="Download Terms & Conditions PDF"
        version="1.0"
        lastUpdated="February 2026"
        variant="hero-outline"
      />
    </div>

    <div className="mt-12 space-y-10">
      {sections.map((s) => (
        <section key={s.title}>
          <h2 className="font-heading text-xl font-semibold">{s.title}</h2>
          <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
            {s.content}
          </p>
        </section>
      ))}
    </div>

    <p className="mt-16 text-xs text-muted-foreground">
      Last updated: February 2026 · These terms are governed by the laws of Sri Lanka.
    </p>
  </div>
);

export default Terms;
