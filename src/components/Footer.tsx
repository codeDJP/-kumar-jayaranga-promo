import { Link } from "react-router-dom";
import { Phone, Mail, Clock, Bot } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 bg-card/50">
    <div className="container py-16">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-lg font-bold">
            <span className="text-gradient">KJ</span> Promo
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Tech, Science & Conspiracy promotions. Professional video promotion services for Sri Lankan businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2">
            {[
              { to: "/packages", label: "Packages" },
              { to: "/downloads", label: "Download Center" },
              { to: "/terms", label: "Terms & Conditions" },
              { to: "/privacy", label: "Privacy Policy" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Agency */}
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Agency — Tringledo (Pvt) Ltd
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-primary" /> 070 1080 720
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-primary" /> ceo@tringledo.com
            </li>
          </ul>
        </div>

        {/* Personal */}
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Personal / Collabs
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-primary" /> 077 918 8020
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-primary" /> info@kumarjayaranga.com
            </li>
          </ul>

          <div className="mt-4 space-y-1 text-xs text-muted-foreground">
            <p className="flex items-center gap-1.5">
              <Clock size={12} className="text-primary" /> I typically respond within 12 hours or less.
            </p>
            <p className="flex items-center gap-1.5">
              <Bot size={12} className="text-primary" /> 24/7 AI assistant support via{" "}
              <a href="https://kumarjayaranga.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                kumarjayaranga.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Kumar Jayaranga — Tringledo (Pvt) Ltd. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
