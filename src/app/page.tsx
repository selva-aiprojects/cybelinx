import Hero from "@/components/Hero";
import Section, { SectionHeading } from "@/components/Section";
import TrustBar from "@/components/TrustBar";
import ProductCard from "@/components/ProductCard";
import FeatureCard from "@/components/FeatureCard";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import CTABand from "@/components/CTABand";
import AnimatedSection from "@/components/AnimatedSection";
import ComparisonTable from "@/components/ComparisonTable";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { platformPillars, differentiators, whyCybelinx } from "@/lib/content";
import { products } from "@/lib/products";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ── Social proof ─────────────────────── */}
      <Section>
        <AnimatedSection>
          <TrustBar />
        </AnimatedSection>
      </Section>

      {/* ── Product Portfolio ─────────────────── */}
      <Section id="products" textured glow>
        <AnimatedSection>
          <SectionHeading
            eyebrow="Product Portfolio"
            title="Seven platforms. Two live in production, five under active development with design partners."
            description="Every Cybelinx product is built on the same multi-tenant core — new industries slot in without a rebuild."
          />
        </AnimatedSection>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <AnimatedSection key={product.slug} delay={index * 0.08}>
              <ProductCard product={product} />
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* ── Platform Pillars ──────────────────── */}
      <Section id="platform-pillars" glow>
        <AnimatedSection>
          <SectionHeading
            eyebrow="The Cybelinx Platform"
            title="Four pillars. One foundation."
            description="Web & SaaS/PaaS, AI & LLM, DevSecOps, and quantum-ready engineering — all on a unified multi-tenant core for regulated enterprises."
          />
        </AnimatedSection>
        <div className="grid gap-5 md:grid-cols-2">
          {platformPillars.map((pillar, index) => (
            <AnimatedSection key={pillar.slug} delay={index * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card-bg p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-card-hover hover:-translate-y-1 md:p-10">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-violet/3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-violet/15 transition-all group-hover:scale-110">
                        <pillar.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-surface md:text-2xl">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate">{pillar.description}</p>
                  </div>

                  <div className="shrink-0 rounded-xl border border-primary/20 bg-primary/5 px-5 py-4 backdrop-blur-sm">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Outcome</span>
                    <p className="mt-1.5 max-w-[200px] text-sm font-semibold text-surface leading-snug">
                      {pillar.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection delay={0.4}>
          <div className="mt-8 text-center">
            <Link 
              href="/technologies" 
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-violet transition-colors"
            >
              See how platform and DevOps teams use these pillars
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── How Cybelinx Is Different ────────── */}
      <Section id="how-cybelinx-is-different" textured glow>
        <AnimatedSection>
          <SectionHeading
            eyebrow="How Cybelinx Is Different"
            title="Cloud AI platforms give you building blocks. We give you the whole building."
            description="An AI-native, multi-tenant platform, multi-cloud DevSecOps, and a portfolio of regulated SaaS products — all designed to boost developer productivity in enterprise engineering and platform teams."
          />
        </AnimatedSection>
        <AnimatedSection>
          <div className="mt-8">
            <ComparisonTable />
          </div>
        </AnimatedSection>
      </Section>

      {/* ── How It Works ──────────────────────── */}
      <Section id="how-it-works">
        <AnimatedSection>
          <SectionHeading
            eyebrow="How It Works"
            title="From data to decision in four steps."
            description="Every Cybelinx product follows the same pipeline — ingest, analyze, act, and improve. No complex setup required."
          />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <ArchitectureFlow
            title="The Cybelinx Pipeline"
            steps={[
              { label: "Ingest", description: "Connect your data sources — ERP, HRIS, POS, IoT, or third-party APIs — via pre-built connectors." },
              { label: "Analyze", description: "AI engines process data in real time: compliance checks, anomaly detection, predictive analytics." },
              { label: "Act", description: "Automated workflows trigger alerts, approvals, and actions — statutory filings, maintenance tickets, payroll runs." },
              { label: "Improve", description: "Feedback loops refine models and rules as your business evolves — bi-weekly releases with zero downtime." },
            ]}
            outcome="A single multi-tenant platform that adapts to any industry without a rebuild."
          />
        </AnimatedSection>
      </Section>

      {/* ── Why Cybelinx ─────────────────────── */}
      <Section id="why-cybelinx" textured glow>
        <AnimatedSection>
          <SectionHeading
            eyebrow="Why Cybelinx"
            title="Why enterprises choose our products."
          />
        </AnimatedSection>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyCybelinx.map((pillar, index) => (
            <AnimatedSection key={pillar.title} delay={index * 0.08}>
              <FeatureCard
                title={pillar.title}
                description={pillar.description}
                icon={pillar.icon}
                index={index}
              />
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* ── Final CTA ────────────────────────── */}
      <Section>
        <AnimatedSection>
          <CTABand />
        </AnimatedSection>
      </Section>
    </>
  );
}
