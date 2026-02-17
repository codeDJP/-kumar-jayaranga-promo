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
    content: `• First Meet : Published on 1 platform/channel only. Visible for 30 days. Client has no reposting rights.\n\n• The Promotion : Published across all platforms. Visible for 30 days. Client may repost on their own organic channels for the 30-day window.\n\n• Move Around : Negotiable terms for duration, revenue-share, or "Perpetual Usage" (lifetime rights), allowing the content to remain live indefinitely for a one-time buyout fee.`,
  },
  {
    title: "4. Extension & Unauthorized Usage Fee",
    content: `After the 30-day period, promotions must be removed or made private. Extensions must be booked in advance. A 3-day grace period is provided for removal. If content remains active on client channels after the grace period without an extension, an Unauthorized Usage Fee of 1/30th of the original package total will be charged daily until removal.`,
  },
  {
    title: "5. Revisions",
    content: `Each package includes up to 2 rounds of revisions. Revision requests must be submitted within 5 business days of receiving the draft. Additional revisions beyond this limit will incur extra charges based on the complexity of the request.`,
  },
  {
    title: "6. Usage Rights & Whitelisting",
    content: `Kumar Jayaranga retains all moral and intellectual property rights, including the right to use the content for personal portfolio and marketing purposes. Organic reposting is only permitted under "The Promotion." Using the content for "Whitelisting" (Paid Ads/Spark Ads) is strictly prohibited unless a separate licensing fee is agreed upon in writing.`,
  },
  {
    title: "7. Content Restrictions & Brand Safety",
    content: `We reserve the right to decline any promotion involving content deemed harmful, misleading, illegal, or in violation of platform guidelines. Brand safety is paramount; content that risks the reputation of Kumar Jayaranga or Tringledo (Pvt) Ltd will not be published.`,
  },
  {
    title: "8. Removal Policy",
    content: `Once the uptime expires, the promotion will be unlisted or made private. If the client fails to remove reposted content within the grace period (Section 4), the daily Unauthorized Usage Fee will be invoiced immediately. Early removal by client request does not entitle the client to a refund.`,
  },
  {
    title: "9. Liability & Disclaimers",
    content: `Kumar Jayaranga and Tringledo (Pvt) Ltd are not liable for incidental or consequential damages. Performance metrics (views/conversions) are not guaranteed. Platform algorithm shifts, policy updates, or force majeure events are outside of our control.`,
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
