import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";
import StatBand from "@/components/StatBand";
import CustomerLogoStrip from "@/components/CustomerLogoStrip";
import CTABand from "@/components/CTABand";
import { products } from "@/lib/products";
import { Globe2, ShieldCheck, Cpu, TrendingUp, Handshake, Network } from "lucide-react";

const pillars = [
  {
    icon: Globe2,
    title: "Global Reach",
    description: "Designed for multi-location, multi-tenant operations that need consistency at scale.",
  },
  {
    icon: Cpu,
    title: "AI Innovation",
    description: "Practical AI embedded into workflows teams already rely on every day.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Trust",
    description: "Enterprise-ready architecture with isolation, governance, and resilience in mind.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    description: "Expand from one site or team to many without re-platforming your operations.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "We work alongside your leadership and operators through rollout, adoption, and growth.",
  },
  {
    icon: Network,
    title: "Engineering Excellence",
    description: "Product engineering built for reliability, maintainability, and long-term performance.",
  },
];

const ehms = products.find((p) => p.slug === "ehms")!;

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section>
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan">Products</span>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Purpose-built platforms for high-complexity operations.
          </h2>
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
            Engineered for trust, scale, and operational clarity.
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
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Operational performance you can see in action.</h2>
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
