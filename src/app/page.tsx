import Hero from "@/components/Hero";
import Section, { SectionHeading } from "@/components/Section";
import TrustBar from "@/components/TrustBar";
import ProductCard from "@/components/ProductCard";
import FeatureCard from "@/components/FeatureCard";
import CTABand from "@/components/CTABand";
import AnimatedSection from "@/components/AnimatedSection";
import ApertureScene from "@/components/ApertureScene";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import { capabilities, whyCybelinx } from "@/lib/content";
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

      <Section id="products">
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

      {/* Live Telemetry Showcase with ApertureScene */}
      <Section id="live-monitoring" textured>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse shadow-[0_0_8px_#60c8e0]" />
              <span className="slugline">Real-Time Precision</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-surface md:text-4xl leading-[1.15]">
              Continuous telemetry and AI-native decision engines.
            </h2>
            <p className="mt-4 text-base leading-8 text-surface/85">
              Every Cybelinx platform operates with microsecond monitoring precision. Our multi-tenant core ingests live enterprise data streams, applying predictive AI algorithms to automate statutory compliance and operational workflows in real time.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="spotlight-card rounded-xl p-5 border border-surface/10">
                <span className="font-display text-3xl font-bold text-cyan">99.99%</span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate mt-1">Platform Uptime</span>
              </div>
              <div className="spotlight-card rounded-xl p-5 border border-surface/10">
                <span className="font-display text-3xl font-bold text-primary">&lt;10ms</span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate mt-1">AI Inference Latency</span>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="h-[400px] w-full">
            <ApertureScene />
          </AnimatedSection>
        </div>
      </Section>

      <Section id="capabilities">
        <AnimatedSection>
          <SectionHeading eyebrow="Platform Capabilities" title="What every Cybelinx product shares under the hood." />
        </AnimatedSection>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <AnimatedSection key={capability.title} delay={index * 0.08}>
              <FeatureCard title={capability.title} description={capability.description} icon={capability.icon} />
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Enterprise Architecture Pipeline Flow */}
      <Section id="architecture-flow">
        <AnimatedSection>
          <ArchitectureFlow
            title="How Cybelinx Transforms Enterprise Operations"
            steps={[
              { label: "Data Ingestion", description: "Multi-tenant connectors sync ERP, HRIS, and IoT streams securely." },
              { label: "AI Engine Processing", description: "Predictive models and statutory compliance engines analyze data in real time." },
              { label: "Autonomous Action", description: "Automated payroll processing, dynamic room pricing, and predictive alerts." },
            ]}
            outcome="Zero statutory penalties, 40% reduction in manual admin, and real-time operational visibility across all enterprise entities."
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
