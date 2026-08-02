import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import FeatureCard from "@/components/FeatureCard";
import CTABand from "@/components/CTABand";
import { whyCybelinx } from "@/lib/content";
import { Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Company",
  description: "Cybelinx builds enduring enterprise technology platforms — unifying AI, SaaS, PaaS, DevOps, cybersecurity, automation, analytics, and cloud platforms.",
};

export default function CompanyPage() {
  return (
    <>
      <Section className="pt-16">
        <PageHeader
          eyebrow="Company"
          title="Engineering the Future of Enterprise Intelligence."
          description="Cybelinx builds enduring technology platforms rather than offering software development services. Our platform architecture spans AI, SaaS, PaaS, DevOps, cybersecurity, automation, analytics, and multi-cloud infrastructure."
        />
      </Section>

      <Section textured>
        <div className="rounded-2xl border border-border bg-background p-8 md:p-10">
          <h2 className="font-display text-2xl font-bold text-surface">Our story</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate">
            Cybelinx was founded with a singular conviction: enterprises need enduring technology platform foundations, not custom software development services that require constant rewrites. By unifying artificial intelligence, vertical SaaS/PaaS engines, multi-cloud DevSecOps, cybersecurity guardrails, and real-time analytics, we enable regulated global enterprises to innovate continuously without tech debt or technological obsolescence.
          </p>
        </div>
      </Section>

      <Section>
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Platform Principles</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-surface">How we build enduring platforms.</h2>
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
          <h2 className="mt-4 font-display text-2xl font-bold text-surface">Global Operations</h2>
          <p className="mt-3 max-w-2xl text-sm text-slate">
            Distributed platform engineering teams providing enterprise governance, zero-trust cybersecurity, multi-cloud reliability, and 24/7 continuous operations for global enterprises across 12+ countries.
          </p>
        </div>
      </Section>

      <Section>
        <CTABand heading="Partner with Cybelinx" subheading="Let's discuss how our enduring technology platforms can elevate your enterprise intelligence." />
      </Section>
    </>
  );
}
