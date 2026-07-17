import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import CTABand from "@/components/CTABand";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Multi-Property Hospitality Operating Platform — Case Study",
  description: "How Cybelinx built a unified hospitality management platform serving 136+ modules across property groups with 99.9% uptime.",
};

const results = [
  "136+ integrated modules running on a single platform",
  "99.9% platform uptime across all property groups",
  "Unified reporting across properties, regions, and brands",
  "Reduced IT overhead with a single multi-tenant deployment",
];

export default function HospitalityCaseStudyPage() {
  return (
    <>
      <Section className="pt-16">
        <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
          <ArrowLeft className="h-4 w-4" />
          Back to Case Studies
        </Link>

        <div className="mt-6">
          <span className="slugline">Hospitality</span>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-surface md:text-5xl">
            Multi-property hospitality operating platform
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate">
            How Cybelinx consolidated front office, housekeeping, maintenance, finance, and
            guest management into one multi-tenant platform for a global hospitality group.
          </p>
        </div>
      </Section>

      <Section textured>
        <div className="rounded-2xl border border-border bg-background p-8 md:p-10">
          <span className="slugline">The Problem</span>
          <h2 className="mt-3 font-display text-2xl font-bold text-surface">
            Disconnected systems across 20+ properties
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate">
            The customer operated multiple hotels, serviced apartments, and rental properties
            across several brands. Each property ran its own PMS, finance tool, and
            housekeeping board. Corporate reporting required manual consolidation across
            spreadsheets. Guest profiles were siloed — a repeat guest at one property was a
            new customer at another. IT spent 40% of its budget maintaining integrations
            between legacy systems.
          </p>
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-border bg-background p-8 md:p-10">
          <span className="slugline">The Solution</span>
          <h2 className="mt-3 font-display text-2xl font-bold text-surface">
            CybeHMS — a single platform for all properties
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate">
            Cybelinx deployed CybeHMS with schema-isolated multi-tenancy, giving each property
            its own data space while sharing the same codebase and infrastructure. The platform
            covered front desk operations, housekeeping coordination, maintenance ticketing,
            property-level finance, and guest CRM — all accessible from a single dashboard.
          </p>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Multi-tenant architecture — each property is a tenant, not a fork",
              "Real-time housekeeping and maintenance coordination",
              "Property-level finance that rolls up to group-level GL",
              "Unified guest profiles across all properties and brands",
              "Role-based access for corporate, regional, and property teams",
              "Zero-downtime canary deployments across all tenants",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl border border-border bg-charcoal p-4 text-sm text-slate">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section textured>
        <div className="rounded-2xl border border-border bg-background p-8 md:p-10">
          <span className="slugline">Results</span>
          <h2 className="mt-3 font-display text-2xl font-bold text-surface">
            Measurable outcomes in the first 12 months
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {results.map((result) => (
              <div key={result} className="flex items-start gap-3 rounded-xl border border-border bg-charcoal p-5">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-live" />
                <span className="text-sm font-semibold text-surface">{result}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-border bg-background p-8 md:p-10">
          <span className="slugline">Customer Quote</span>
          <blockquote className="mt-4 max-w-3xl text-lg italic leading-relaxed text-surface">
            &ldquo;CybeHMS gave us a single source of truth across every property. We finally
            have real-time visibility into operations, finance, and guest experience — something
            we were told was years away.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm font-semibold text-slate">
            — Chief Operating Officer, Global Hospitality Group
          </p>
        </div>
      </Section>

      <Section>
        <CTABand
          heading="Want results like this for your organization?"
          subheading="Book a walkthrough tailored to your industry and operating model."
        />
      </Section>
    </>
  );
}
