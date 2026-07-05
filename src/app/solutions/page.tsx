import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import FeatureCard from "@/components/FeatureCard";
import CTABand from "@/components/CTABand";
import { solutions } from "@/lib/content";
import { Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Industry solutions built on our multi-tenant SaaS platforms for enterprise operations.",
};

export default function SolutionsPage() {
  return (
    <>
      <Section className="pt-16">
        <PageHeader
          eyebrow="Solutions"
          title="One platform, every industry."
          description="Cybelinx products are built on a shared multi-tenant core that adapts to Banking, Healthcare, Pharma, HCM, Manufacturing, Retail, Logistics, Telecom, and Energy."
        />
      </Section>

      <Section textured>
        <div className="grid gap-6 md:grid-cols-2">
          {solutions.map((solution) => (
            <FeatureCard
              key={solution.title}
              title={solution.title}
              description={solution.description}
              icon={Package}
            />
          ))}
        </div>
      </Section>

      <Section>
        <CTABand heading="See a product demo" subheading="Our solution architects will walk you through the platform tailored to your industry." />
      </Section>
    </>
  );
}
