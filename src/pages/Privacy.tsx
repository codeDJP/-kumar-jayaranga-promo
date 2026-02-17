const Privacy = () => (
  <div className="container max-w-3xl py-20">
    <h1 className="font-heading text-4xl font-bold md:text-5xl">
      Privacy <span className="text-gradient">Policy</span>
    </h1>
    <p className="mt-3 text-muted-foreground">
      Your privacy matters. Here's how we handle your data.
    </p>

    <div className="mt-12 space-y-10 text-sm leading-relaxed text-muted-foreground">
      <section>
        <h2 className="font-heading text-xl font-semibold text-foreground">1. Contact Form Data</h2>
        <p className="mt-3">
          When you submit an inquiry through our contact form, we collect your name, email address, phone number (if provided), company name, and message content. This information is used solely to respond to your inquiry and to process potential bookings. We do not sell, rent, or share your personal data with third parties for marketing purposes.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl font-semibold text-foreground">2. Cookies & Analytics</h2>
        <p className="mt-3">
          This website may use basic analytics tools to understand visitor behavior (pages visited, session duration, etc.). Cookies may be used to improve your browsing experience. By using this site, you consent to the use of essential cookies. No personally identifiable information is collected through analytics.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl font-semibold text-foreground">3. Third-Party Links</h2>
        <p className="mt-3">
          Our website may contain links to external sites (e.g., WhatsApp, social media platforms). We are not responsible for the privacy practices or content of those external sites. We encourage you to read the privacy policies of any third-party site you visit.
        </p>
      </section>

      <section>
        <h2 className="font-heading text-xl font-semibold text-foreground">4. Data Protection</h2>
        <p className="mt-3">
          We take reasonable measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure. If you have any concerns about data security, please contact us at info@kumarjayaranga.com.
        </p>
      </section>
    </div>

    <p className="mt-16 text-xs text-muted-foreground">
      Last updated: February 2026 · For questions, contact info@kumarjayaranga.com
    </p>
  </div>
);

export default Privacy;
