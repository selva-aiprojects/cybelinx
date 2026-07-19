import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/content";
import type { Metadata } from "next";
import Section from "@/components/Section";
import CTABand from "@/components/CTABand";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) return { title: "Case Study not found" };
  return {
    title: `${study.title} — Case Study`,
    description: study.description,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((s) => s.slug === params.slug);

  if (!study || !study.problem) {
    notFound();
  }

  return (
    <>
      <Section className="pt-16">
        <AnimatedSection>
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </Link>

          <div className="mt-6">
            <span className="slugline">{study.industry}</span>
            <h1 className="mt-3 font-display text-4xl font-extrabold text-surface md:text-5xl">
              {study.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate">
              {study.description}
            </p>
          </div>
        </AnimatedSection>
      </Section>

      <Section textured>
        <AnimatedSection delay={0.1}>
          <div className="rounded-2xl border border-border bg-background p-8 md:p-10 transition-all hover:shadow-md">
            <span className="slugline">The Problem</span>
            <h2 className="mt-3 font-display text-2xl font-bold text-surface">
              {study.problem.title}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate">
              {study.problem.text}
            </p>
          </div>
        </AnimatedSection>
      </Section>

      <Section>
        <AnimatedSection delay={0.2}>
          <div className="rounded-2xl border border-border bg-background p-8 md:p-10 transition-all hover:shadow-md">
            <span className="slugline">The Solution</span>
            <h2 className="mt-3 font-display text-2xl font-bold text-surface">
              {study.solution.title}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate">
              {study.solution.text}
            </p>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {study.solution.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-border bg-charcoal p-4 text-sm text-slate hover:border-primary/30 transition-colors">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </Section>

      <Section textured>
        <AnimatedSection delay={0.3}>
          <div className="rounded-2xl border border-border bg-background p-8 md:p-10 transition-all hover:shadow-md">
            <span className="slugline">Results</span>
            <h2 className="mt-3 font-display text-2xl font-bold text-surface">
              Measurable outcomes in the first 12 months
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {study.results.map((result) => (
                <div key={result} className="flex items-start gap-3 rounded-xl border border-border bg-charcoal p-5 hover:border-live/30 transition-colors">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-live" />
                  <span className="text-sm font-semibold text-surface">{result}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <Section>
        <AnimatedSection delay={0.4}>
          <div className="rounded-2xl border border-border bg-background p-8 md:p-10 transition-all hover:shadow-md hover:border-primary/40 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-brand"></div>
            <span className="slugline">Customer Quote</span>
            <blockquote className="mt-4 max-w-3xl text-lg italic leading-relaxed text-surface">
              &ldquo;{study.quote.text}&rdquo;
            </blockquote>
            <p className="mt-4 text-sm font-semibold text-slate">
              — {study.quote.author}
            </p>
          </div>
        </AnimatedSection>
      </Section>

      <Section>
        <CTABand
          heading="Want results like this for your organization?"
          subheading="Book a walkthrough tailored to your industry and operating model."
        />
      </Section>
    </>
  );
}
