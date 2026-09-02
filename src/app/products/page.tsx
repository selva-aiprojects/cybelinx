import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";
import AnimatedProductSection from "@/components/AnimatedProductSection";
import ProductNewsSection from "@/components/ProductNewsSection";
import { portfolios } from "@/lib/portfolios";
import { cognivectraPlatforms } from "@/lib/cognivectraContent";

export const metadata: Metadata = {
  title: "Enterprise AI Products and SaaS Platforms",
  description:
    "Explore Cybelinx enterprise products: CybeHRMS, CybeHospitality, CybePharma Suite, CybeBank, CybeFinTech, CybeHealth, CybeCommerce, and CybeERP.",
  keywords: [
    "enterprise AI products",
    "enterprise SaaS platforms",
    "AI-powered HRMS",
    "healthcare management software",
    "digital banking platform",
    "enterprise ERP software",
  ],
};

export default function ProductsPage() {
  return (
    <main className="bg-background min-h-screen text-surface relative">
      <Section className="pt-16 pb-8 border-b border-border/40 relative overflow-hidden">
        {/* Ambient top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-primary/20 blur-[140px] rounded-full pointer-events-none" />
        
        <PageHeader
          eyebrow="Portfolio & Platform"
          title="Intelligent enterprise solutions on a unified core."
          description="Explore how Cybelinx empowers regulated industries with secure SaaS products and future-proof infrastructure."
        />

        {/* Flashy Hero Graphic Banner */}
        <div className="mt-8 relative w-full max-w-5xl mx-auto h-[320px] sm:h-[420px] rounded-3xl overflow-hidden border border-white/20 shadow-2xl group">
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
                Dedicated Enterprise Architecture & Enterprise GenAI Runtime
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

      {/* Production Ready Enterprise Platforms Showcase */}
      <Section id="production-platforms" textured glow className="py-10 border-t border-border/40">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
            Production-Ready Platforms
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Enterprise Solutions Ready for Live Deployment
          </h2>
          <p className="mt-3 text-base text-slate">
            Proven enterprise architectures engineered for retail, healthcare, fintech, workforce, and higher education.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {cognivectraPlatforms.map((plat) => (
            <div
              key={plat.name}
              className="group p-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-white/25 flex flex-col justify-between shadow-xl"
              style={{
                boxShadow: `0 10px 30px rgba(0,0,0,0.4)`,
              }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider"
                    style={{
                      background: `${plat.accent}20`,
                      color: plat.accent,
                      border: `1px solid ${plat.accent}40`,
                    }}
                  >
                    {plat.badge}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {plat.name}
                </h3>
                <p className="mt-1 text-xs font-semibold text-cyan-400">{plat.tagline}</p>
                <p className="mt-3 text-xs text-slate-300 leading-relaxed">{plat.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  href={plat.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 group-hover:text-cyan-300"
                >
                  <span>Explore Platform</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Latest Product News & Announcements */}
      <Section id="product-news" textured glow className="py-10 border-t border-border/40">
        <ProductNewsSection />
      </Section>

      <Section textured className="py-12">
        <CTABand 
          heading="Ready to elevate your enterprise?" 
          subheading="Our platform strategists will help you map capabilities to your industry and compliance requirements."
        />
      </Section>
    </main>
  );
}
