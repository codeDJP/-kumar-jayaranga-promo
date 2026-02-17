import { FileText } from "lucide-react";
import DownloadButton from "@/components/DownloadButton";

const documents = [
  {
    title: "Price List",
    description: "Complete pricing for all promotion packages in LKR.",
    href: "/#/print/price-list",
    version: "1.0",
    lastUpdated: "February 2026",
  },
  {
    title: "Terms & Conditions",
    description: "Full terms covering payment, publishing rules, extensions, usage rights, and more.",
    href: "/#/print/terms",
    version: "1.0",
    lastUpdated: "February 2026",
  },
];

const Downloads = () => (
  <div className="container py-20">
    <div className="text-center">
      <h1 className="font-heading text-4xl font-bold md:text-5xl">
        Download <span className="text-gradient">Center</span>
      </h1>
      <p className="mt-3 text-muted-foreground">
        Access official documents. Download, print, and share with your team.
      </p>
    </div>

    <div className="mx-auto mt-14 grid max-w-2xl gap-6">
      {documents.map((doc) => (
        <div
          key={doc.title}
          className="flex flex-col gap-4 rounded-2xl border border-border/50 bg-card p-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <FileText size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold">{doc.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{doc.description}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                v{doc.version} · Last updated: {doc.lastUpdated}
              </p>
            </div>
          </div>
          <DownloadButton href={doc.href} label="Download PDF" variant="hero" size="sm" />
        </div>
      ))}
    </div>
  </div>
);

export default Downloads;
