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
    <Link href={`/products/${product.slug}`} className="group block cursor-pointer h-full">
      <div 
        className="relative h-full flex flex-col overflow-hidden rounded-2xl border border-border bg-card-bg shadow-card transition-all duration-300 hover:border-[color:var(--card-accent,var(--cb-primary))] group-hover:shadow-card-hover group-hover:-translate-y-1"
        style={{ '--card-accent': product.colorAccent } as React.CSSProperties}
      >

        {/* Gradient top accent line */}
        <div 
          className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" 
          style={{ background: product.colorAccent || 'var(--gradient-brand)' }}
        />

        {/* Background glow on hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" 
          style={{ background: `radial-gradient(circle at 50% 0%, ${product.colorAccent || 'var(--cb-primary)'} 0%, transparent 70%)` }}
        />

        {/* Product image with stylized dashboard framing */}
        {product.image && (
          <div className="relative h-52 w-full overflow-hidden border-b border-border/50 bg-charcoal pt-4 px-4 sm:pt-6 sm:px-6">
            {/* Dashboard Mockup Frame */}
            <div className="relative h-full w-full rounded-t-xl overflow-hidden border border-border/50 bg-background shadow-sm ring-1 ring-black/5">
              {/* Traffic lights header */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-slate/5 border-b border-border/50 flex items-center px-3 gap-1.5 z-20 backdrop-blur-sm">
                <div className="h-2 w-2 rounded-full bg-rose/40" />
                <div className="h-2 w-2 rounded-full bg-amber-400/40" />
                <div className="h-2 w-2 rounded-full bg-emerald-400/40" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-violet/5 z-10 pointer-events-none" />
              <div className="absolute inset-x-0 top-6 bottom-0">
                <Image
                  src={product.image}
                  alt={`${product.name} Dashboard`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        )}

        {/* Card body */}
        <div className="relative flex flex-1 flex-col p-6">
          {/* Category + badges row */}
          <div className="flex items-center justify-between gap-3">
            <span className="slugline">{product.category}</span>
            <div className="flex items-center gap-2 shrink-0">
              {product.appUrl && (
                <span className="rounded-full bg-live/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-live border border-live/20">
                  Live App
                </span>
              )}
              <Badge tone={statusTone[product.status]}>{statusLabel[product.status]}</Badge>
            </div>
          </div>

          {/* Product name */}
          <h3 
            className="mt-3 font-display text-xl font-bold text-surface transition-colors md:text-2xl"
            style={{ '--hover-color': product.colorAccent || 'var(--cb-primary)' } as React.CSSProperties}
          >
            <span className="group-hover:text-[color:var(--hover-color)] transition-colors">{product.name}</span>
          </h3>

          {/* Tagline */}
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-primary/70">
            {product.tagline}
          </p>

          {/* Summary */}
          <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">
            {product.summary}
          </p>

          {/* CTA arrow row */}
          <div 
            className="mt-5 flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3 text-slate-500 group-hover:text-[color:var(--card-accent,var(--cb-primary))]"
          >
            Explore {product.name}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
