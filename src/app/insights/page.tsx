import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";
import { insights } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights",
  description: "Perspectives on product engineering, cloud platforms, and enterprise AI from Cybelink.",
};

export default function InsightsPage() {
  return (
    <>
      <Section className="pt-16">
        <PageHeader
          eyebrow="Insights"
          title="Perspectives from the engineering front line."
          description="Articles and briefs on building intelligent products and scaling digital enterprises."
        />
      </Section>

      <Section textured>
        <div className="grid gap-6">
          {insights.map((article) => (
            <Link
              key={article.slug}
              href="/contact"
              className="glass group rounded-2xl p-8 transition-colors hover:border-cyan/30"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-slate">
                <span>{article.category}</span>
                <span>·</span>
                <span>{article.date}</span>
              </div>
              <h2 className="font-display mt-3 text-2xl font-bold text-white">{article.title}</h2>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-cyan">
                Read article
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <CTABand heading="Subscribe to engineering briefs" subheading="Get periodic insights on product engineering and platform strategy." />
      </Section>
    </>
  );
}
