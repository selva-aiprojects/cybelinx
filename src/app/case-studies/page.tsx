import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";
import { caseStudies } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

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
        <div className="grid gap-6">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href="/contact"
              className="group flex flex-col justify-between gap-4 rounded-2xl border border-border bg-background p-8 transition-all hover:-translate-y-0.5 hover:shadow-md md:flex-row md:items-center cursor-pointer"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">{study.industry}</span>
                <h2 className="mt-2 font-display text-2xl font-bold text-surface">{study.title}</h2>
                <p className="mt-2 text-sm text-slate">{study.outcome}</p>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-primary">
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
