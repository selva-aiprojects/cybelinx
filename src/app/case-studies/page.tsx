import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";
import { caseStudies } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Enterprise outcomes delivered by Cybelink product engineering teams.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Section className="pt-16">
        <PageHeader
          eyebrow="Case Studies"
          title="Proof in production."
          description="Selected programs demonstrating scale, reliability, and business impact across industries."
        />
      </Section>

      <Section textured>
        <div className="grid gap-6">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href="/contact"
              className="glass group flex flex-col justify-between gap-4 rounded-2xl p-8 transition-colors hover:border-cyan/30 md:flex-row md:items-center"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-cyan">{study.industry}</span>
                <h2 className="font-display mt-2 text-2xl font-bold text-white">{study.title}</h2>
                <p className="mt-2 text-sm text-slate">{study.outcome}</p>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-cyan">
                Request full story
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <CTABand heading="Need a reference in your industry?" subheading="We can share relevant delivery patterns under NDA." />
      </Section>
    </>
  );
}
