import Link from "next/link";
import { ArrowUpRight, Circle } from "lucide-react";
import Badge from "./Badge";
import { Product } from "@/lib/products";

const statusTone: Record<Product["status"], "live" | "new" | "soon"> = {
  live: "live",
  preview: "new",
  "coming-soon": "soon",
};

const statusLabel: Record<Product["status"], string> = {
  live: "Live",
  preview: "Preview",
  "coming-soon": "Coming Soon",
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="frame group flex flex-col justify-between rounded-2xl p-8 transition-all duration-200 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(42,119,173,0.08)]"
    >
      <div>
        <div className="flex items-center justify-between gap-3">
          <span className="slugline">{product.category}</span>
          <div className="flex items-center gap-2">
            {product.appUrl && (
              <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400 border border-emerald-500/20 shadow-[0_0_12px_rgba(16,185,129,0.15)]">
                Live App
              </span>
            )}
            <Badge tone={statusTone[product.status]}>{statusLabel[product.status]}</Badge>
          </div>
        </div>
        <h3 className="font-display mt-4 text-2xl font-semibold text-surface">{product.name}</h3>
        <p className="mt-1 font-slug text-xs tracking-wide text-primary">{product.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-surface/85">{product.summary}</p>
      </div>
      <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-primary">
        Explore {product.name}
        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </Link>
  );
}
