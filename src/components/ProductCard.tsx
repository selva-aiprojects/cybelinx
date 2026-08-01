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
        className="relative h-full flex flex-col overflow-hidden rounded-2xl glass-container transition-all duration-300 group-hover:shadow-[0_12px_40px_rgba(59,130,246,0.15)] group-hover:-translate-y-1"
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
          <div className="relative h-56 w-full overflow-hidden border-b border-border/50 bg-charcoal/80 pt-4 px-4 sm:pt-5 sm:px-5">
            {/* Dashboard Mockup Frame */}
            <div className="relative h-full w-full rounded-t-xl overflow-hidden border border-border/60 bg-background shadow-md ring-1 ring-black/10">
              {/* Traffic lights header */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-slate-900/40 border-b border-border/40 flex items-center px-3 gap-1.5 z-20 backdrop-blur-md">
                <div className="h-2 w-2 rounded-full bg-rose-500/70" />
                <div className="h-2 w-2 rounded-full bg-amber-500/70" />
                <div className="h-2 w-2 rounded-full bg-emerald-500/70" />
                <span className="ml-2 text-[10px] font-mono text-slate-400/70 truncate">cybelinx.ai/{product.slug}</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-violet/5 z-10 pointer-events-none" />
              <div className="absolute inset-x-0 top-6 bottom-0">
                <Image
                  src={product.image}
                  alt={`${product.name} Dashboard`}
                  fill
                  unoptimized
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

          {/* Product name with branding icon prefix */}
          <h3 
            className="mt-3 font-display text-xl font-bold text-surface transition-colors md:text-2xl drop-shadow-sm flex items-center gap-2.5"
            style={{ '--hover-color': product.colorAccent || 'var(--cb-primary)' } as React.CSSProperties}
          >
            {product.icon && (
              <div 
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/90 dark:bg-slate-900/90 p-1 shadow-sm"
                style={{ border: `1px solid ${(product.colorAccent || '#0D47FF')}35` }}
              >
                <img src={product.icon} alt={`${product.name} icon`} className="h-full w-full object-contain" />
              </div>
            )}
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
            className="mt-5 flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3 text-slate opacity-80 group-hover:text-[color:var(--card-accent,var(--cb-primary))]"
          >
            Explore {product.name}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
