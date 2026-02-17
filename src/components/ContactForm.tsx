import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactForm = () => {
  return (
    <form
      action="https://formsubmit.co/info@kumarjayaranga.com"
      method="POST"
      className="space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium">Name *</label>
          <Input name="name" required placeholder="Your full name" maxLength={100} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Company</label>
          <Input name="company" placeholder="Company name" maxLength={100} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium">Email *</label>
          <Input name="email" required type="email" placeholder="you@company.com" maxLength={255} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Phone</label>
          <Input name="phone" type="tel" placeholder="+94 77 xxx xxxx" maxLength={20} />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium">Product / Service</label>
        <Input name="product_or_service" placeholder="What are you promoting?" maxLength={200} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium">Package Interest</label>
          <Select name="package_interest">
            <SelectTrigger>
              <SelectValue placeholder="Select a package" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="first-meet">First Meet — LKR 20,000</SelectItem>
              <SelectItem value="the-promotion">The Promotion — LKR 100,000</SelectItem>
              <SelectItem value="move-around">Move Around — Custom</SelectItem>
              <SelectItem value="not-sure">Not sure yet</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Budget (LKR)</label>
          <Input name="budget" placeholder="Approximate budget" maxLength={50} />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium">Message</label>
        <Textarea name="message" placeholder="Tell us about your project…" rows={4} maxLength={1000} />
      </div>

      <Button variant="hero" size="lg" type="submit" className="w-full sm:w-auto">
        Send Inquiry
      </Button>
    </form>
  );
};

export default ContactForm;
