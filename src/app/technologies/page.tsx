import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";
import { technologies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Technologies",
  description: "Modern engineering technologies powering Cybelinx product delivery.",
};

export default function TechnologiesPage() {
  return (
    <>
      <Section className="pt-16">
        <PageHeader
          eyebrow="Technologies"
          title="A modern stack for enterprise-grade products."
          description="We select technologies for durability, security, and team velocity—aligned to your cloud and compliance requirements."
        />
      </Section>

      <Section textured>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => (
            <div key={tech} className="glass rounded-2xl p-6 text-sm font-medium text-white">
              {tech}
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <CTABand heading="Architecture review?" subheading="Our platform engineers can assess your stack and roadmap modernization paths." />
      </Section>
    </>
  );
}
