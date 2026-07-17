import Hero from "@/components/Hero";
import Section, { SectionHeading } from "@/components/Section";
import TrustBar from "@/components/TrustBar";
import ProductCard from "@/components/ProductCard";
import FeatureCard from "@/components/FeatureCard";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import CTABand from "@/components/CTABand";
import AnimatedSection from "@/components/AnimatedSection";
import { platformPillars, differentiators, whyCybelinx } from "@/lib/content";
import { products } from "@/lib/products";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section>
        <AnimatedSection>
          <TrustBar />
        </AnimatedSection>
      </Section>

      <Section id="products" textured>
        <AnimatedSection>
          <SectionHeading
            eyebrow="Product Portfolio"
            title="Seven platforms. Two in production, five in the pipeline."
            description="Every Cybelinx product shares the same multi-tenant core — new industries slot into the platform without a rebuild."
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

      <Section id="platform-pillars" textured>
        <AnimatedSection>
          <SectionHeading
            eyebrow="The Cybelinx Platform"
            title="Four pillars. One foundation."
            description="Web & SaaS/PaaS, AI & LLM, DevSecOps, and quantum-ready engineering — all on a unified multi-tenant core for regulated enterprises."
          />
        </AnimatedSection>
        {platformPillars.map((pillar, index) => (
          <AnimatedSection key={pillar.slug} delay={index * 0.08}>
            <div className="group mb-6 rounded-2xl border border-border bg-background p-8 transition-all hover:-translate-y-0.5 hover:shadow-md md:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3">
                    <pillar.icon className="h-6 w-6 text-primary" />
                    <h3 className="font-display text-xl font-bold text-surface md:text-2xl">{pillar.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{pillar.description}</p>
                </div>
                <div className="shrink-0 rounded-xl border border-primary/20 bg-primary/5 px-5 py-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Outcome</span>
                  <p className="mt-1 max-w-xs text-sm font-semibold text-surface">{pillar.outcome}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </Section>

      <Section id="how-cybelinx-is-different">
        <AnimatedSection>
          <SectionHeading
            eyebrow="How Cybelinx Is Different"
            title="Cloud AI platforms give you building blocks. DevSecOps tools secure your pipelines. Single-vertical SaaS solves one problem. Cybelinx brings all three together."
            description="An AI-native, multi-tenant platform, multi-cloud DevSecOps, and a portfolio of regulated SaaS products — all designed to boost developer productivity in enterprise engineering teams."
          />
        </AnimatedSection>
        <div className="space-y-8">
          {differentiators.map((diff, index) => (
            <AnimatedSection key={diff.title} delay={index * 0.08}>
              <div className="rounded-2xl border border-border bg-background p-8 transition-all hover:-translate-y-0.5 hover:shadow-md md:p-10">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <diff.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-bold text-surface">{diff.title}</h3>
                    <p className="mt-2 text-sm font-semibold text-primary/80">{diff.hook}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate">{diff.summary}</p>
                    <ul className="mt-4 space-y-2">
                      {diff.details.map((d) => (
                        <li key={d.slice(0, 20)} className="flex items-start gap-2 text-sm text-slate">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {d}
                        </li>
                      ))}
                    </ul>
                    <blockquote className="mt-4 border-l-2 border-primary pl-4 text-sm italic leading-relaxed text-surface/80">
                      {diff.quote}
                    </blockquote>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

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

      <Section id="why-cybelinx" textured>
        <AnimatedSection>
          <SectionHeading eyebrow="Why Cybelinx" title="Why enterprises choose our products." />
        </AnimatedSection>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyCybelinx.map((pillar, index) => (
            <AnimatedSection key={pillar.title} delay={index * 0.08}>
              <FeatureCard title={pillar.title} description={pillar.description} icon={pillar.icon} />
            </AnimatedSection>
          ))}
        </div>
      </Section>

      <Section>
        <AnimatedSection>
          <CTABand />
        </AnimatedSection>
      </Section>
    </>
  );
}
