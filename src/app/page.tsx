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
import ArchitectureValidationPlayground from "@/components/ArchitectureValidationPlayground";
import GlobalRegulatoryEngine from "@/components/GlobalRegulatoryEngine";
import RegulatedFeatureMatrix from "@/components/RegulatedFeatureMatrix";
import { products } from "@/lib/products";
import { whyCybelinx } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ── 5 Core Pillars ─────────────────────── */}
      <Section id="platform-pillars" glow className="py-10 md:py-14">
        <PlatformPillars />
      </Section>

      {/* ── High-Value Core Product Feature Matrix ── */}
      <Section id="market-offerings" className="py-10 md:py-14 border-t border-border/40">
        <AnimatedSection>
          <RegulatedFeatureMatrix />
        </AnimatedSection>
      </Section>

      {/* ── Proof-of-Value Architecture Playground ───── */}
      <Section id="validation-playground" className="py-10 md:py-14 border-t border-border/40">
        <AnimatedSection>
          <ArchitectureValidationPlayground />
        </AnimatedSection>
      </Section>

      {/* ── Global Regulatory Adaptation Engine ────── */}
      <Section id="global-regulatory" textured glow className="py-10 md:py-14 border-t border-border/40">
        <AnimatedSection>
          <GlobalRegulatoryEngine />
        </AnimatedSection>
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
            eyebrow="Enterprise Offerings & PaaS Architecture"
            title="Certified Enterprise SaaS & Standalone PaaS Infrastructure"
            description="Operational vertical SaaS products alongside the standalone Cybelinx PaaS core. Pre-live preview modules are available upon Beta access request."
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

      {/* ── Engineering Hub: Blueprints & Telemetry ── */}
      <Section id="engineering-hub" textured glow className="py-12 md:py-16 border-t border-border/40">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Engineering Hub & Telemetry"
            title="Interactive Technical Blueprints & Dynamic Network Topologies"
            description="Deep-dive into multi-cloud execution flows, active node clustering, microservice telemetry, and schema-isolated data pipelines."
          />
        </AnimatedSection>
        <div className="mt-8 flex flex-col gap-12">
          <AnimatedSection>
            <EnterpriseFlowsSlider />
          </AnimatedSection>
          <AnimatedSection>
            <DynamicNetworkEcosystem />
          </AnimatedSection>
        </div>
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
