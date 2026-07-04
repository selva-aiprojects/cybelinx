import type { Metadata } from "next";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Cybelinx about CogniHR, eHMS, or a general inquiry.",
};

export default function ContactPage() {
  return (
    <Section className="pt-16">
      <span className="text-xs font-semibold uppercase tracking-widest text-cyan">Contact</span>
      <h1 className="mt-3 max-w-xl text-4xl font-bold text-white md:text-5xl">Let&apos;s talk.</h1>
      <p className="mt-5 max-w-xl text-surface/80">
        Tell us which product you&apos;re interested in and we&apos;ll route you to the right person.
      </p>

      <div className="mt-12 grid gap-10 md:grid-cols-[1.2fr,0.8fr]">
        <ContactForm />

        <div className="space-y-6">
          <div className="glass flex items-start gap-4 rounded-2xl p-6">
            <Mail className="mt-1 h-5 w-5 text-cyan" />
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate">Email</div>
              {/* PLACEHOLDER — confirm real contact email */}
              <div className="mt-1 text-sm text-white">hello@cybelinx.com</div>
            </div>
          </div>
          <div className="glass flex items-start gap-4 rounded-2xl p-6">
            <Phone className="mt-1 h-5 w-5 text-cyan" />
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate">Phone</div>
              {/* PLACEHOLDER — confirm real contact number */}
              <div className="mt-1 text-sm text-white">+1 (123) 456-7890</div>
            </div>
          </div>
          <div className="glass flex items-start gap-4 rounded-2xl p-6">
            <MapPin className="mt-1 h-5 w-5 text-cyan" />
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate">Office</div>
              {/* PLACEHOLDER — confirm real office address */}
              <div className="mt-1 text-sm text-white">Address on request</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
