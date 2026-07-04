import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import FeatureCard from "@/components/FeatureCard";
import CTABand from "@/components/CTABand";
import { whyCybelink } from "@/lib/content";
import { Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Company",
  description: "About Cybelink — product engineering for global enterprises.",
};

export default function CompanyPage() {
  return (
    <>
      <Section className="pt-16">
        <PageHeader
          eyebrow="Company"
          title="Engineering intelligent products for global enterprises."
          description="Cybelink is a product engineering company delivering AI-powered digital products, cloud-native platforms, and industry solutions."
        />
      </Section>

      <Section textured>
        <div className="glass rounded-2xl p-8 md:p-10">
          <h2 className="font-display text-2xl font-bold text-white">Our story</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-surface/80">
            Cybelink partners with CIOs, CTOs, and product leaders to design and deliver platforms that become strategic
            advantages. We combine product mindset, global delivery, and deep engineering craft across Banking, Healthcare,
            Pharma, HCM, Manufacturing, Retail, Logistics, Telecom, and Energy.
          </p>
        </div>
      </Section>

      <Section>
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan">Leadership principles</span>
          <h2 className="font-display mt-3 text-3xl font-bold text-white">How we show up for customers.</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyCybelink.map((pillar) => (
            <FeatureCard key={pillar.title} title={pillar.title} description={pillar.description} icon={pillar.icon} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="glass rounded-2xl p-8 md:p-10">
          <Building2 className="h-6 w-6 text-cyan" />
          <h2 className="font-display mt-4 text-2xl font-bold text-white">Global delivery</h2>
          <p className="mt-3 max-w-2xl text-sm text-surface/80">
            Distributed engineering teams with enterprise governance, secure delivery practices, and partnership models
            aligned to your operating rhythm.
          </p>
        </div>
      </Section>

      <Section>
        <CTABand heading="Partner with Cybelink" subheading="Let's discuss your product roadmap, platform strategy, or modernization program." />
      </Section>
    </>
  );
}
