import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";
import { insights } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights",
  description: "Technical perspectives on product engineering, cloud platforms, AI in enterprise workflows, and SaaS architecture from the Cybelinx team.",
};

export default function InsightsPage() {
  return (
    <>
      <Section className="pt-16">
        <PageHeader
          eyebrow="Insights"
          title="Perspectives from the product front line."
          description="Articles and briefs on building and scaling enterprise SaaS platforms."
        />
      </Section>

      <Section textured>
        <div className="grid gap-6">
          {insights.map((article) => (
            <Link
              key={article.slug}
              href="/contact"
              className="group rounded-2xl border border-border bg-background p-8 transition-all hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-slate">
                <span>{article.category}</span>
                <span>&middot;</span>
                <span>{article.date}</span>
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold text-surface">{article.title}</h2>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary">
                Read article
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <CTABand heading="Subscribe to product updates" subheading="Get periodic insights on enterprise SaaS and product engineering." />
      </Section>
    </>
  );
}
