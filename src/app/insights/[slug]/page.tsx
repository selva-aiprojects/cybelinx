import { notFound } from "next/navigation";
import { insights } from "@/lib/content";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import type { Metadata } from "next";

export function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const insight = insights.find((i) => i.slug === params.slug);
  if (!insight) return { title: "Insight not found" };
  return {
    title: insight.title,
    description: `Read more about ${insight.category.toLowerCase()} from Cybelinx.`,
  };
}

export default function InsightArticlePage({ params }: { params: { slug: string } }) {
  const insight = insights.find((i) => i.slug === params.slug);

  if (!insight) {
    notFound();
  }

  return (
    <>
      <Section className="pt-24 pb-8 border-b border-border/50">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <Link 
              href="/insights" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-violet transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Insights
            </Link>
            
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-slate mb-6">
              <span className="bg-primary/10 text-primary px-2.5 py-1 rounded font-bold">{insight.category}</span>
              <span>&middot;</span>
              <span>{insight.date}</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl font-bold text-surface leading-tight">
              {insight.title}
            </h1>
          </div>
        </AnimatedSection>
      </Section>

      <Section textured className="py-16">
        <AnimatedSection delay={0.1}>
          <article className="max-w-3xl mx-auto prose prose-invert prose-slate lg:prose-lg prose-headings:font-display prose-headings:text-surface prose-p:text-slate/90 prose-a:text-primary hover:prose-a:text-violet">
            {insight.content?.map((block, index) => {
              if (block.type === "h3") {
                return <h3 key={index} className="mt-10 mb-4">{block.text}</h3>;
              }
              return <p key={index} className="mb-6 leading-relaxed">{block.text}</p>;
            })}
          </article>
        </AnimatedSection>
      </Section>

      <Section>
        <CTABand 
          heading="Discuss your platform strategy" 
          subheading="Want to dive deeper into these topics? Connect with our engineering leaders to discuss how Cybelinx can accelerate your product roadmap." 
          buttonText="Contact Us"
          buttonHref="/contact"
        />
      </Section>
    </>
  );
}
