import { useEffect } from "react";

const sections = [
  { 
    title: "1. Payment & Invoicing", 
    content: "All prices are quoted in Sri Lankan Rupees (LKR). Payment must be completed in full before the promotion goes live, unless a custom arrangement has been agreed in writing. Invoices are issued by Tringledo (Pvt) Ltd. Payment methods and banking details will be provided upon booking." 
  },
  { 
    title: "2. Approval Process", 
    content: "Where applicable, clients must submit a script or content outline for review before production begins. Approval or revision requests must be communicated within 3 business days. Once a script is approved in writing, the production phase begins." 
  },
  { 
    title: "3. Publishing Rules by Package", 
    content: "First Meet : Published on 1 platform / 1 channel only. Visible for 30 days. Client does not have the right to repost.\n\nThe Promotion : Published across all platforms and channels. Visible for 30 days. Client may repost on their own channels for 30 days.\n\nMove Around : Negotiable terms including royalty, revenue-share, or Perpetual Usage (lifetime rights) allowing content to remain live indefinitely for a one-time buyout fee." 
  },
  { 
    title: "4. Extension & Unauthorized Usage", 
    content: "After the 30-day visibility period, promotions must be removed or made private. Extensions must be booked in advance. A 3-day grace period is provided for removal. If content remains active on client channels after the grace period without an extension, an Unauthorized Usage Fee of 1/30th of the original total package price will be charged daily until removal." 
  },
  { 
    title: "5. Revisions", 
    content: "Each package includes up to 2 rounds of revisions. Revision requests must be submitted within 5 business days of receiving the draft. Additional revisions may incur extra charges." 
  },
  { 
    title: "6. Usage Rights & Whitelisting", 
    content: "Kumar Jayaranga retains all moral and intellectual property rights, including the right to use content for personal portfolio and marketing. Client reposting is limited to 'The Promotion' package for the 30-day window. Whitelisting (Paid Ads/Spark Ads) is strictly prohibited unless a separate licensing fee is agreed upon in writing." 
  },
  { 
    title: "7. Content Restrictions & Brand Safety", 
    content: "We reserve the right to decline any promotion involving content deemed harmful, misleading, illegal, or in violation of platform guidelines. Brand safety is paramount; content that risks the reputation of Kumar Jayaranga or Tringledo (Pvt) Ltd will not be published." 
  },
  { 
    title: "8. Removal Policy After Uptime", 
    content: "Once the agreed visibility period expires, the promotion will be unlisted or made private. If the client fails to remove reposted content within the grace period (Section 4), the daily Unauthorized Usage Fee will be invoiced immediately. Early removal does not entitle the client to a refund." 
  },
  { 
    title: "9. Liability & Disclaimers", 
    content: "Kumar Jayaranga and Tringledo (Pvt) Ltd are not liable for any indirect, incidental, or consequential damages. Performance results (views, clicks, conversions) are not guaranteed. Platform algorithm changes or force majeure events may impact visibility." 
  },
];

const PrintTerms = () => {
  useEffect(() => {
    document.title = "Terms & Conditions - Kumar Jayaranga";
  }, []);

  return (
    <div className="min-h-screen bg-white text-black p-8 print:p-4 max-w-3xl mx-auto">
      <style>{`
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
        }
      `}</style>

      <div className="no-print mb-6 flex gap-3">
        <button onClick={() => window.print()} className="px-5 py-2 bg-[#A7D707] text-black font-semibold rounded-lg hover:opacity-90">
          Save as PDF / Print
        </button>
        <button onClick={() => window.close()} className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          Close
        </button>
      </div>

      <header className="border-b-2 border-[#A7D707] pb-4 mb-8">
        <h1 className="text-3xl font-bold">Kumar Jayaranga</h1>
        <p className="text-lg text-gray-600 mt-1">Terms & Conditions</p>
        <p className="text-sm text-gray-500 mt-1">Version 1.0 · February 2026</p>
      </header>

      <div className="space-y-6">
        {sections.map((s) => (
          <section key={s.title}>
            <h2 className="text-lg font-bold text-[#5a7a00]">{s.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 whitespace-pre-line">{s.content}</p>
          </section>
        ))}
      </div>

      <footer className="border-t pt-4 mt-12 text-xs text-gray-500 space-y-1">
        <p><strong>Agency:</strong> Tringledo (Pvt) Ltd</p>
        <p><strong>Email:</strong> info@kumarjayaranga.com · ceo@tringledo.com</p>
        <p><strong>Phone:</strong> 077 918 8020 · 070 1080 720</p>
        <p className="mt-2">These terms are governed by the laws of Sri Lanka.</p>
        <p>© {new Date().getFullYear()} Kumar Jayaranga / Tringledo (Pvt) Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrintTerms;
