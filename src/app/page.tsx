import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";
import StatBand from "@/components/StatBand";
import CustomerLogoStrip from "@/components/CustomerLogoStrip";
import CTABand from "@/components/CTABand";
import { products } from "@/lib/products";
import { Globe2, ShieldCheck, Cpu, TrendingUp, Handshake, Network } from "lucide-react";

const pillars = [
  { icon: Globe2, title: "Global Reach", description: "Built to serve organizations wherever they operate." },
  { icon: Cpu, title: "AI Innovation", description: "AI-native workflows, not AI bolted on after the fact." },
  { icon: ShieldCheck, title: "Security & Trust", description: "Multi-tenant architecture built with isolation in mind." },
  { icon: TrendingUp, title: "Scalable Growth", description: "Platforms that grow from one team to many properties." },
  { icon: Handshake, title: "Partnership", description: "We work alongside your team through rollout and beyond." },
  { icon: Network, title: "Engineering Excellence", description: "Real infrastructure, not a thin layer over spreadsheets." },
];

const ehms = products.find((p) => p.slug === "ehms")!;

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section>
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan">Products</span>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Two platforms. One engineering standard.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
          <div className="glass flex flex-col items-start justify-center rounded-2xl border-dashed p-8 text-slate">
            <span className="text-sm font-semibold">More products</span>
            <p className="mt-2 text-sm">Coming soon to the Cybelinx portfolio.</p>
          </div>
        </div>
      </Section>

      <Section textured>
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan">Why Cybelinx</span>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Every product is built on the same foundation.
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="glass rounded-2xl p-6">
              <pillar.icon className="h-6 w-6 text-cyan" />
              <h3 className="mt-4 text-base font-semibold text-white">{pillar.title}</h3>
              <p className="mt-2 text-sm text-slate">{pillar.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan">Proof in production</span>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">eHMS, running live today.</h2>
        </div>
        {ehms.stats && <StatBand stats={ehms.stats} />}
        <div className="mt-8">{ehms.customers && <CustomerLogoStrip customers={ehms.customers} />}</div>
      </Section>

      <Section>
        <CTABand />
      </Section>
    </>
  );
}
