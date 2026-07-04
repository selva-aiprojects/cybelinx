import type { Metadata } from "next";
import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";
import CTABand from "@/components/CTABand";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore CogniHR and eHMS — Cybelinx's AI-native, multi-tenant SaaS platforms.",
};

export default function ProductsPage() {
  return (
    <>
      <Section className="pt-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-cyan">Products</span>
        <h1 className="mt-3 max-w-2xl text-4xl font-bold text-white md:text-5xl">
          Built for the operations you actually run.
        </h1>
        <p className="mt-5 max-w-xl text-surface/80">
          Each Cybelinx product is a dedicated, deep platform for one vertical — not a generic suite stretched thin.
        </p>
      </Section>

      <Section>
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

      <Section>
        <CTABand />
      </Section>
    </>
  );
}
