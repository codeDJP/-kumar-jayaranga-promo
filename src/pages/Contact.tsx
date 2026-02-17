import ContactForm from "@/components/ContactForm";
import { Phone, Mail, Clock, Bot } from "lucide-react";

const Contact = () => (
  <div className="container py-20">
    <div className="text-center">
      <h1 className="font-heading text-4xl font-bold md:text-5xl">
        Get In <span className="text-gradient">Touch</span>
      </h1>
      <p className="mt-3 text-muted-foreground">
        Ready to promote? Fill out the form below and I'll respond within 12 hours.
      </p>
    </div>

    <div className="mx-auto mt-14 grid max-w-5xl gap-12 lg:grid-cols-5">
      {/* Form */}
      <div className="lg:col-span-3">
        <div className="rounded-2xl border border-border/50 bg-card p-8">
          <h2 className="mb-6 font-heading text-xl font-semibold">Send an Inquiry</h2>
          <ContactForm />
        </div>
      </div>

      {/* Info */}
      <div className="space-y-8 lg:col-span-2">
        <div className="rounded-2xl border border-border/50 bg-card p-8">
          <h3 className="font-heading text-lg font-semibold">Agency</h3>
          <p className="mt-1 text-sm text-muted-foreground">Tringledo (Pvt) Ltd</p>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-primary" /> 070 1080 720
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-primary" /> ceo@tringledo.com
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-border/50 bg-card p-8">
          <h3 className="font-heading text-lg font-semibold">Personal / Collabs</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-primary" /> 077 918 8020
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-primary" /> info@kumarjayaranga.com
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-border/50 bg-card/50 p-6">
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock size={14} className="text-primary" />
            I typically respond within 12 hours or less.
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <Bot size={14} className="text-primary" />
            24/7 AI assistant at{" "}
            <a href="https://kumarjayaranga.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              kumarjayaranga.com
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
