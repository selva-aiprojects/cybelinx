import Hero from "@/components/Hero";
import Section, { SectionHeading } from "@/components/Section";
import TrustBar from "@/components/TrustBar";
import ProductCard from "@/components/ProductCard";
import FeatureCard from "@/components/FeatureCard";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import CTABand from "@/components/CTABand";
import AnimatedSection from "@/components/AnimatedSection";
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
