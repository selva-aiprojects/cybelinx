import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";
import ProductNewsSection from "@/components/ProductNewsSection";
import { insights } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights & Product News",
  description: "Technical perspectives, product announcements, major releases, and cloud platform news from the Cybelinx team.",
};

export default function InsightsPage() {
  return (
    <>
      <Section className="pt-16">
        <PageHeader
          eyebrow="Insights & Product News"
          title="Perspectives & product announcements from the front line."
          description="Explore technical briefs and official release news across our enterprise AI and SaaS platforms."
        />
      </Section>

      {/* Featured Product News Section */}
      <Section textured glow className="py-16">
        <ProductNewsSection />
      </Section>

      <Section textured className="py-16">
        <h2 className="font-display text-2xl font-bold text-surface mb-8">Engineering & Platform Perspectives</h2>
        <div className="grid gap-6">
          {insights.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
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
