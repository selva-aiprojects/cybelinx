import Hero from "@/components/Hero";
import PlatformPillars from "@/components/PlatformPillars";
import Section, { SectionHeading } from "@/components/Section";
import ProductCard from "@/components/ProductCard";
import FeatureCard from "@/components/FeatureCard";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import CTABand from "@/components/CTABand";
import AnimatedSection from "@/components/AnimatedSection";
import ComparisonTable from "@/components/ComparisonTable";
import ProductNewsSection from "@/components/ProductNewsSection";
import DynamicNetworkEcosystem from "@/components/DynamicNetworkEcosystem";
import EnterpriseFlowsSlider from "@/components/EnterpriseFlowsSlider";
import ArchitectureReviewForm from "@/components/ArchitectureReviewForm";
import TrustBar from "@/components/TrustBar";
import TechStack from "@/components/TechStack";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { platformPillars, differentiators, whyCybelinx } from "@/lib/content";
import { products } from "@/lib/products";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ── 5 Core Pillars ─────────────────────── */}
      <Section id="platform-pillars" glow className="py-10 md:py-14">
        <PlatformPillars />
      </Section>

      {/* ── Social Proof & Trust ────────────────── */}
      <Section id="trust" className="pt-0 pb-6 md:pb-8 border-b border-border/50">
        <AnimatedSection>
          <TrustBar />
        </AnimatedSection>
      </Section>

      {/* ── Built On Enterprise Foundations ────── */}
      <Section id="tech-stack" className="py-8 md:py-10 border-b border-border/50">
        <AnimatedSection>
          <TechStack />
        </AnimatedSection>
      </Section>

      {/* ── Product Portfolio ─────────────────── */}
      <Section id="products" textured glow className="py-10 md:py-14">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Enterprise Platforms & Offerings"
            title="Technology platforms designed for enterprise performance and control."
            description="From AI-ready operations to secure multi-cloud delivery and industry-specific SaaS — built on a single foundation that scales responsibly with your business."
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

      {/* ── Enterprise Transformation Flow Blueprints ── */}
      <Section id="enterprise-flows" textured glow className="py-10 md:py-14 border-t border-border/40">
        <AnimatedSection>
          <EnterpriseFlowsSlider />
        </AnimatedSection>
      </Section>

      {/* ── Dynamic Network Topologies ────────────────── */}
      <Section id="network-ecosystem" className="py-10 md:py-14 border-t border-border/40">
        <AnimatedSection>
          <DynamicNetworkEcosystem />
        </AnimatedSection>
      </Section>

      {/* ── Latest Product News & Innovations ──── */}
      <Section id="product-news" textured glow className="py-10 md:py-14">
        <AnimatedSection>
          <ProductNewsSection />
        </AnimatedSection>
      </Section>

      {/* ── 30-Minute Strategic Architecture Review ────── */}
      <Section id="architecture-review" className="py-10 md:py-14 border-t border-border/40">
        <AnimatedSection>
          <ArchitectureReviewForm />
        </AnimatedSection>
      </Section>

      {/* ── How Cybelinx Is Different ────────── */}
      <Section id="how-cybelinx-is-different" textured glow className="py-10 md:py-14">
        <AnimatedSection>
          <SectionHeading
            eyebrow="How Cybelinx Is Different"
            title="Most vendors offer software services or isolated tools. Cybelinx builds enduring technology platforms."
            description="A unified platform foundation encompassing AI, SaaS, PaaS, DevOps, cybersecurity, automation, analytics, and cloud infrastructure — engineered to adapt as technology shifts."
          />
        </AnimatedSection>
        <AnimatedSection>
          <div className="mt-8">
            <ComparisonTable />
          </div>
        </AnimatedSection>
      </Section>

      {/* ── How It Works ──────────────────────── */}
      <Section id="how-it-works" className="py-12 md:py-16">
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
            outcome="A single platform that adapts to any industry without a rebuild."
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
