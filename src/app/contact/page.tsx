import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { brand } from "@/lib/content";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${brand.name} about solutions, products, and enterprise engineering programs.`,
};

export default function ContactPage() {
  return (
    <Section className="pt-16">
      <PageHeader
        eyebrow="Contact"
        title="Let's engineer your next platform."
        description="Share your goals, operating environment, or modernization priorities — we'll connect you with the right leaders."
      />

      <div className="mt-12 grid gap-10 md:grid-cols-[1.2fr,0.8fr]">
        <ContactForm />

        <div className="space-y-6">
          <div className="frame flex items-start gap-4 rounded-md p-6">
            <Mail className="mt-1 h-5 w-5 text-primary" />
            <div>
              <div className="slugline">Email</div>
              <div className="mt-1 text-sm text-surface">{brand.email}</div>
            </div>
          </div>
          <div className="frame flex items-start gap-4 rounded-md p-6">
            <Phone className="mt-1 h-5 w-5 text-primary" />
            <div>
              <div className="slugline">Phone</div>
              <div className="mt-1 text-sm text-surface">Available on request</div>
            </div>
          </div>
          <div className="frame flex items-start gap-4 rounded-md p-6">
            <MapPin className="mt-1 h-5 w-5 text-primary" />
            <div>
              <div className="slugline">Head Office</div>
              <div className="mt-1 text-sm text-surface">
                No. 42, 89/5, Horamavu Agara Rd, 1st Block, Mallappa Layout, Hennur Gardens, Bengaluru, Karnataka
                560113
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
