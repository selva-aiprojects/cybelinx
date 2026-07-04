import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
      className="glass group flex flex-col justify-between rounded-2xl p-8 transition-colors duration-200 hover:border-cyan/40"
    >
      <div>
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan">{product.category}</span>
          <Badge tone={statusTone[product.status]}>{statusLabel[product.status]}</Badge>
        </div>
        <h3 className="font-display mt-3 text-2xl font-bold text-white">{product.name}</h3>
        <p className="mt-1 text-sm text-slate">{product.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-surface/80">{product.summary}</p>
      </div>
      <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-white">
        Explore {product.name}
        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </Link>
  );
}
