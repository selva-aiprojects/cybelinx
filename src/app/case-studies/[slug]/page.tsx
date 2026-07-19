import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/content";
import type { Metadata } from "next";
import Section from "@/components/Section";
import CTABand from "@/components/CTABand";
import { ArrowLeft, CheckCircle, Network, Layers, Users, Database, Building2 } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return { title: "Case Study not found" };
  return {
    title: `${study.title} — Case Study`,
    description: study.description,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study || !study.problem) {
    notFound();
  }

  return (
    <>
      <Section className="pt-24 pb-12 border-b border-border/50">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-violet transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" />
              Back to Case Studies
            </Link>

            <span className="slugline">{study.industry}</span>
            <h1 className="mt-4 font-display text-4xl font-extrabold text-surface md:text-5xl leading-tight">
              {study.title}
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-slate leading-relaxed">
              {study.description}
            </p>

            {/* Metrics Band */}
            {study.metrics && (
              <div className="mt-10 grid grid-cols-3 gap-4 border-y border-border/50 py-6">
                {study.metrics.map((metric, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-3xl font-display font-bold text-surface">{metric.value}</span>
                    <span className="text-sm font-semibold text-primary mt-1 uppercase tracking-wider">{metric.key}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </AnimatedSection>
      </Section>

      <Section className="py-16">
        <div className="max-w-4xl mx-auto grid gap-16">
          
          {/* Customer Context */}
          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
              <h3 className="font-display text-xl font-bold text-surface mb-6 flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" /> Customer Context
              </h3>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <span className="text-xs uppercase tracking-widest text-slate font-bold mb-2 block">Organization</span>
                  <p className="text-sm text-surface leading-relaxed">{study.customer?.description}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-slate font-bold mb-2 block">Scale & Complexity</span>
                  <p className="text-sm text-surface leading-relaxed mb-4">{study.customer?.scale}</p>
                  <span className="text-xs uppercase tracking-widest text-slate font-bold mb-2 block">Regulatory Landscape</span>
                  <p className="text-sm text-surface leading-relaxed">{study.customer?.regulations}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Problem & Solution */}
          <AnimatedSection delay={0.2}>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <span className="slugline text-red-400">The Challenge</span>
                <h2 className="mt-3 font-display text-2xl font-bold text-surface">{study.problem.title}</h2>
                <p className="mt-4 text-slate leading-relaxed">{study.problem.text}</p>
              </div>
              <div>
                <span className="slugline text-live">The Solution</span>
                <h2 className="mt-3 font-display text-2xl font-bold text-surface">{study.solution.title}</h2>
                <p className="mt-4 text-slate leading-relaxed">{study.solution.text}</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Technical Implementation */}
          <AnimatedSection delay={0.3}>
            <div className="rounded-2xl border border-border bg-card-bg p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Network className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <span className="slugline">Implementation Deep-Dive</span>
                
                <div className="mt-8 mb-10">
                  <h3 className="text-lg font-bold text-surface mb-3 flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" /> Architecture
                  </h3>
                  <p className="text-slate leading-relaxed">{study.implementation?.architecture}</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-surface mb-3 flex items-center gap-2">
                    <Layers className="h-5 w-5 text-primary" /> DevOps Workflows
                  </h3>
                  <p className="text-slate leading-relaxed">{study.implementation?.workflow}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Split Results */}
          <AnimatedSection delay={0.4}>
            <span className="slugline">Measurable Outcomes</span>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              
              <div className="rounded-2xl border border-border bg-background p-8">
                <h3 className="text-lg font-bold text-surface mb-6 flex items-center gap-2 border-b border-border pb-4">
                  <Users className="h-5 w-5 text-primary" /> Business Impact
                </h3>
                <ul className="space-y-4">
                  {study.results?.business.map((res, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-live" />
                      <span className="leading-relaxed">{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-background p-8">
                <h3 className="text-lg font-bold text-surface mb-6 flex items-center gap-2 border-b border-border pb-4">
                  <Network className="h-5 w-5 text-primary" /> Engineering Metrics
                </h3>
                <ul className="space-y-4">
                  {study.results?.engineering.map((res, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="leading-relaxed">{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </AnimatedSection>

          {/* Quotes */}
          <AnimatedSection delay={0.5}>
            <div className="grid gap-6">
              {study.quotes?.map((quote, i) => (
                <div key={i} className={`rounded-2xl border border-border p-8 md:p-10 relative overflow-hidden ${i === 1 ? 'bg-primary/5' : 'bg-background'}`}>
                  {i === 1 && <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-brand"></div>}
                  <blockquote className="text-lg md:text-xl font-medium italic leading-relaxed text-surface">
                    &ldquo;{quote.text}&rdquo;
                  </blockquote>
                  <p className="mt-6 text-sm font-bold text-primary uppercase tracking-wider">
                    — {quote.author}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

        </div>
      </Section>

      <Section>
        <CTABand
          heading="Want results like this for your organization?"
          subheading="Book a technical deep-dive tailored to your industry and operating model."
        />
      </Section>
    </>
  );
}
