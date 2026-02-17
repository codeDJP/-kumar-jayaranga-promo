import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ContactForm = () => {
  return (
    <form
      action="https://formsubmit.co/info@kumarjayaranga.com"
      method="POST"
      className="space-y-5"
    >
      <div>
        <label className="mb-1.5 block text-sm font-medium">Name *</label>
        <Input name="name" required placeholder="Your full name" maxLength={100} />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium">Email *</label>
        <Input
          name="email"
          required
          type="email"
          placeholder="you@company.com"
          maxLength={255}
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium">Subject</label>
        <Input name="subject" placeholder="Inquiry about..." maxLength={200} />
      </div>

      <Button variant="hero" size="lg" type="submit" className="w-full sm:w-auto">
        Send Inquiry
      </Button>
    </form>
  );
};

export default ContactForm;
