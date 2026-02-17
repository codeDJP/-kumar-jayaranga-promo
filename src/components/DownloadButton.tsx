import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DownloadButtonProps {
  href: string;
  label: string;
  version?: string;
  lastUpdated?: string;
  variant?: "hero" | "hero-outline" | "default" | "outline" | "secondary";
  size?: "default" | "sm" | "lg";
}

const DownloadButton = ({ href, label, version, lastUpdated, variant = "hero-outline", size = "default" }: DownloadButtonProps) => (
  <div className="inline-flex flex-col items-start gap-1">
    <Button variant={variant} size={size} asChild>
      <a href={href} download>
        <Download size={16} />
        {label}
      </a>
    </Button>
    {(version || lastUpdated) && (
      <span className="text-xs text-muted-foreground">
        {version && <>v{version}</>}
        {version && lastUpdated && " · "}
        {lastUpdated && <>Updated {lastUpdated}</>}
      </span>
    )}
  </div>
);

export default DownloadButton;
