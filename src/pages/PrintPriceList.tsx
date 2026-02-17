import { useEffect } from "react";

const PrintPriceList = () => {
  useEffect(() => {
    document.title = "Price List - Kumar Jayaranga";
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
        <p className="text-lg text-gray-600 mt-1">Video Promotion — Price List</p>
        <p className="text-sm text-gray-500 mt-1">Version 1.0 · February 2026</p>
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-[#5a7a00]">Promotion Packages</h2>

        <div className="border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-3 font-semibold">Feature</th>
                <th className="text-center p-3 font-semibold">First Meet<br/><span className="font-normal text-xs">LKR 20,000</span></th>
                <th className="text-center p-3 font-semibold bg-[#A7D707]/10">The Promotion<br/><span className="font-normal text-xs">LKR 100,000</span></th>
                <th className="text-center p-3 font-semibold">Move Around<br/><span className="font-normal text-xs">Custom</span></th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Platforms / Channels", "1 platform, 1 channel", "All platforms & channels", "Custom mix"],
                ["Visibility Uptime", "30 days", "30 days", "Custom"],
                ["Client Repost Rights", "✗ Not included", "✓ 30 days", "Negotiable"],
                ["Extension Available", "✓ Paid add-on", "✓ Paid add-on", "Negotiable"],
                ["Best For", "First-time brands, small tests", "Full reach, stronger impact", "Long-term partnerships"],
                ["Revenue Share / Royalty", "✗", "✗", "✓ Available"],
              ].map(([feature, col1, col2, col3], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-3 font-medium">{feature}</td>
                  <td className="p-3 text-center">{col1}</td>
                  <td className="p-3 text-center bg-[#A7D707]/5">{col2}</td>
                  <td className="p-3 text-center">{col3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3 text-[#5a7a00]">Important Notes</h2>
        <ul className="text-sm space-y-2 text-gray-700">
          <li>• All prices are quoted in <strong>Sri Lankan Rupees (LKR)</strong>.</li>
          <li>• <strong>Video uptime</strong> refers to how long the promotion remains publicly visible on Kumar Jayaranga's channels.</li>
          <li>• <strong>Extensions</strong> are paid add-ons to keep the promotion live beyond the standard 30-day period.</li>
          <li>• For <em>First Meet</em>, the client cannot publish or repost the promotion on their own channels.</li>
          <li>• For <em>The Promotion</em>, the client may repost anywhere within the 30-day uptime window.</li>
          <li>• <em>Move Around</em> terms are fully negotiable and agreed upon in writing.</li>
        </ul>
      </section>

      <footer className="border-t pt-4 mt-12 text-xs text-gray-500 space-y-1">
        <p><strong>Agency:</strong> Tringledo (Pvt) Ltd</p>
        <p><strong>Email:</strong> info@kumarjayaranga.com · ceo@tringledo.com</p>
        <p><strong>Phone:</strong> 077 918 8020 · 070 1080 720</p>
        <p className="mt-2">© {new Date().getFullYear()} Kumar Jayaranga / Tringledo (Pvt) Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrintPriceList;
