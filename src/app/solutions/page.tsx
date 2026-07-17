import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import FeatureCard from "@/components/FeatureCard";
import CTABand from "@/components/CTABand";
import { solutions } from "@/lib/content";
import { Package, RefreshCw, Sparkles, ServerCog, type LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions",
  description: "End-to-end product engineering for regulated enterprises \u2014 greenfield SaaS builds, legacy modernization, AI transformation, and internal developer platforms.",
};

const iconMap: Record<string, LucideIcon> = {
  "Digital Product Development": Package,
  "Legacy Modernization": RefreshCw,
  "AI Transformation": Sparkles,
  "Platform Engineering": ServerCog,
};

export default function SolutionsPage() {
  return (
    <>
      <Section className="pt-16">
        <PageHeader
          eyebrow="Solutions"
          title="One platform. Every industry. Full-stack delivery."
          description="Cybelinx delivers end-to-end product engineering — from greenfield SaaS builds and platform modernization to AI transformation and internal developer platforms."
        />
      </Section>

      <Section textured>
        <div className="grid gap-6 md:grid-cols-2">
          {solutions.map((solution) => {
            const Icon = iconMap[solution.title] ?? Package;
            return (
              <FeatureCard
                key={solution.title}
                title={solution.title}
                description={solution.description}
                icon={Icon}
                href={solution.href}
              />
            );
          })}
        </div>
      </Section>

      <Section>
        <CTABand heading="See a product demo" subheading="Our solution architects will walk you through the platform tailored to your industry." />
      </Section>
    </>
  );
}
