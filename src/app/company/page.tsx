import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import FeatureCard from "@/components/FeatureCard";
import CTABand from "@/components/CTABand";
import { whyCybelinx } from "@/lib/content";
import { Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Company",
  description: "Cybelinx builds multi-tenant AI-native SaaS for regulated enterprises \u2014 HR, hospitality, banking, healthcare, and more. Live at 200+ enterprises.",
};

export default function CompanyPage() {
  return (
    <>
      <Section className="pt-16">
        <PageHeader
          eyebrow="Company"
          title="Building SaaS products for global enterprises."
          description="Cybelinx ships multi-tenant, AI-powered platforms that run enterprise operations \u2014 payroll, hospitality, banking, healthcare, and more."
        />
      </Section>

      <Section textured>
        <div className="rounded-2xl border border-border bg-background p-8 md:p-10">
          <h2 className="font-display text-2xl font-bold text-surface">Our story</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate">
            Cybelinx was founded to build enterprise SaaS products that just work. CybeHRM and CybeHMS are live
            in production today, handling statutory payroll and multi-property hospitality operations. We are
            expanding into Banking, Healthcare, Pharma, Manufacturing, and beyond \u2014 all on the same
            multi-tenant, AI-native core.
          </p>
        </div>
      </Section>

      <Section>
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Product principles</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-surface">How we build products.</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyCybelinx.map((pillar) => (
            <FeatureCard key={pillar.title} title={pillar.title} description={pillar.description} icon={pillar.icon} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-border bg-background p-8 md:p-10">
          <Building2 className="h-6 w-6 text-primary" />
          <h2 className="mt-4 font-display text-2xl font-bold text-surface">Global operations</h2>
          <p className="mt-3 max-w-2xl text-sm text-slate">
            Distributed engineering teams with enterprise governance, secure delivery practices, and 24/7
            platform operations for customers worldwide.
          </p>
        </div>
      </Section>

      <Section>
        <CTABand heading="Partner with Cybelinx" subheading="Let\u2019s discuss your requirements and how our products fit your enterprise." />
      </Section>
    </>
  );
}
