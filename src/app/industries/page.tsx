import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import FeatureCard from "@/components/FeatureCard";
import CTABand from "@/components/CTABand";
import { industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries",
  description: "Cybelinx serves 9 regulated industries \u2014 Banking, Healthcare, Pharma, HCM, Manufacturing, Retail, Logistics, Telecom, and Energy \u2014 all from one multi-tenant platform.",
};

export default function IndustriesPage() {
  return (
    <>
      <Section className="pt-16">
        <PageHeader
          eyebrow="Industries"
          title="Our products run in regulated, high-scale sectors."
          description="Cybelinx platforms are built for Banking, Healthcare, Pharma, HCM, Manufacturing, Retail, Logistics, Telecom, and Energy \u2014 with compliance and scale built in."
        />
      </Section>

      <Section textured>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div key={industry.slug} id={industry.slug}>
              <FeatureCard title={industry.name} description={industry.description} icon={industry.icon} href="/contact" />
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <CTABand heading="See your industry on our platform" subheading="Connect with our domain leads to map products to your operating model." />
      </Section>
    </>
  );
}
