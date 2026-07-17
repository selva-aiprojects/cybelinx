import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { brand } from "@/lib/content";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${brand.name} for demos, trials, and enterprise inquiries.`,
};

export default function ContactPage() {
  return (
    <Section className="pt-16">
      <PageHeader
        eyebrow="Contact"
        title="See our products in action."
        description="Request a demo, start a free trial, or talk to our product team about your enterprise requirements."
      />

      <div className="mt-12 grid gap-10 md:grid-cols-[1.2fr,0.8fr]">
        <ContactForm />

        <div className="space-y-6">
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-background p-6">
            <Mail className="mt-1 h-5 w-5 text-primary" />
            <div>
              <div className="slugline">Email</div>
              <div className="mt-1 text-sm text-surface">{brand.email}</div>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-background p-6">
            <Phone className="mt-1 h-5 w-5 text-primary" />
            <div>
              <div className="slugline">Phone</div>
              <div className="mt-1 text-sm text-surface">Available on request</div>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-background p-6">
            <MapPin className="mt-1 h-5 w-5 text-primary" />
            <div>
              <div className="slugline">Head Office</div>
              <div className="mt-1 text-sm text-surface">{brand.address}</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
