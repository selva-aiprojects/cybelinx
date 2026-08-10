import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";
import AnimatedProductSection from "@/components/AnimatedProductSection";
import ProductNewsSection from "@/components/ProductNewsSection";
import { portfolios } from "@/lib/portfolios";

export const metadata: Metadata = {
  title: "CybePlatforms & Product Portfolio",
  description: "AI-native platform powering HR, healthcare, pharma, analytics, and quantum-ready workloads.",
};

export default function ProductsPage() {
  return (
    <main className="bg-background min-h-screen text-surface relative">
      <Section className="pt-24 pb-12 border-b border-border/40 relative overflow-hidden">
        {/* Ambient top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-primary/20 blur-[140px] rounded-full pointer-events-none" />
        
        <PageHeader
          eyebrow="Portfolio & Platform"
          title="Intelligent enterprise solutions on a unified core."
          description="Explore how Cybelinx empowers regulated industries with secure SaaS products and future-proof infrastructure."
        />

        {/* Flashy Hero Graphic Banner */}
        <div className="mt-12 relative w-full max-w-5xl mx-auto h-[320px] sm:h-[420px] rounded-3xl overflow-hidden border border-white/20 shadow-2xl group">
          <Image
            src="/assets/products/flashy-hero-banner.png"
            alt="Cybelinx Enterprise Platform Showcase"
            fill
            unoptimized
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 backdrop-blur-md">
                Cybelinx 2026 Core Release
              </span>
              <h3 className="mt-2 text-xl sm:text-2xl font-bold font-display text-white">
                Multi-Tenant Architecture & Enterprise GenAI Runtime
              </h3>
            </div>
            <a
              href="#product-news"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shrink-0"
            >
              Read Latest News
            </a>
          </div>
        </div>
      </Section>

      {/* Data-driven animated product sections */}
      <div className="flex flex-col">
        {portfolios.map((content, index) => (
          <AnimatedProductSection key={content.id} content={content} index={index} />
        ))}
      </div>

      {/* Latest Product News & Announcements */}
      <Section id="product-news" textured glow className="py-24 border-t border-border/40">
        <ProductNewsSection />
      </Section>

      <Section textured className="py-24">
        <CTABand 
          heading="Ready to elevate your enterprise?" 
          subheading="Our platform strategists will help you map capabilities to your industry and compliance requirements."
        />
      </Section>
    </main>
  );
}
