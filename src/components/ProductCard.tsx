"use client";

import Link from "next/link";
import Image from "next/image";
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
    <Link href={`/products/${product.slug}`} className="group block cursor-pointer">
      <div className="spotlight-card gradient-border flex h-full flex-col p-6">
        {product.image && (
          <div className="relative mb-5 h-48 w-full overflow-hidden rounded-xl border border-border/50 bg-charcoal">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-violet/5" />
            <Image
              src={product.image}
              alt={`${product.name} Dashboard`}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="flex items-center justify-between gap-3">
          <span className="slugline">{product.category}</span>
          <div className="flex items-center gap-2">
            {product.appUrl && (
              <span className="rounded-full bg-live/10 px-2.5 py-0.5 text-[11px] font-semibold text-live border border-live/20">
                Live App
              </span>
            )}
            <Badge tone={statusTone[product.status]}>{statusLabel[product.status]}</Badge>
          </div>
        </div>
        <h3 className="mt-3 font-display text-xl font-bold text-surface transition-colors group-hover:text-primary">
          {product.name}
        </h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-primary">{product.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate">{product.summary}</p>
        <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-accent">
          Explore {product.name}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </Link>
  );
}
