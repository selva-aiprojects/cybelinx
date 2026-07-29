import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Enterprise outcomes delivered by Cybelinx product platforms.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Section className="pt-16">
        <PageHeader
          eyebrow="Case Studies"
          title="Proof in production."
          description="Selected programs demonstrating scale, reliability, and business impact powered by Cybelinx products."
        />
      </Section>

      <Section textured>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg text-slate">
            Case studies are available under NDA. Contact our team for references relevant to your industry.
          </p>
        </div>
      </Section>

      <Section>
        <CTABand heading="Need a reference in your industry?" subheading="We can share relevant delivery patterns under NDA." />
      </Section>
    </>
  );
}
