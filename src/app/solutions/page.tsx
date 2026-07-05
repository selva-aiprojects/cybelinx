import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import FeatureCard from "@/components/FeatureCard";
import CTABand from "@/components/CTABand";
import { solutions } from "@/lib/content";
import { Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Product engineering solutions for digital transformation, modernization, and AI-powered platforms.",
};

export default function SolutionsPage() {
  return (
    <>
      <Section className="pt-16">
        <PageHeader
          eyebrow="Solutions"
          title="Engineering programs that move enterprises forward."
          description="From greenfield platforms to legacy modernization, Cybelinx delivers outcomes with product discipline and enterprise rigor."
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
        <CTABand heading="Discuss your next initiative" subheading="Our solution architects partner with your leadership team from discovery through delivery." />
      </Section>
    </>
  );
}
