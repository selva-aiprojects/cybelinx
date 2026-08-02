"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
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
  const accent = product.colorAccent || "var(--cb-primary)";

  return (
    <Link href={`/products/${product.slug}`} className="group block cursor-pointer h-full">
      <div
        className="relative h-full flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card-bg transition-all duration-300 group-hover:-translate-y-1.5"
        style={
          {
            "--card-accent": accent,
            boxShadow: "var(--card-shadow)",
          } as React.CSSProperties
        }
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 40px ${accent}22, 0 0 0 1px ${accent}30`;
          (e.currentTarget as HTMLDivElement).style.borderColor = `${accent}50`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--card-shadow)";
          (e.currentTarget as HTMLDivElement).style.borderColor = "";
        }}
      >
        {/* Gradient top accent line on hover */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
          style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
        />

        {/* Background glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${accent}12 0%, transparent 60%)`,
          }}
        />

        {/* Product image with dashboard framing */}
        {product.image && (
          <div className="relative h-52 w-full overflow-hidden border-b border-border/40 bg-charcoal pt-4 px-4 sm:pt-5 sm:px-5">
            {/* Dashboard Mockup Frame */}
            <div className="relative h-full w-full rounded-t-xl overflow-hidden border border-border/60 bg-background shadow-md">
              {/* Traffic lights header */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-slate-900/40 border-b border-border/40 flex items-center px-3 gap-1.5 z-20 backdrop-blur-md">
                <div className="h-1.5 w-1.5 rounded-full bg-rose-500/70" />
                <div className="h-1.5 w-1.5 rounded-full bg-amber-500/70" />
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
                <div
                  className="ml-3 h-3.5 flex-1 max-w-[120px] rounded-sm flex items-center px-1.5 gap-1 overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="h-1 w-1 rounded-full opacity-40" style={{ background: accent }} />
                  <span className="text-[8px] font-mono text-slate-400/50 truncate">
                    cybelinx.ai/{product.slug}
                  </span>
                </div>
              </div>
              <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 80% 20%, ${accent}08 0%, transparent 60%)`,
                }}
              />
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
            <span className="eyebrow-pill text-[10px]">{product.category}</span>
            <div className="flex items-center gap-2 shrink-0">
              {product.appUrl && (
                <span className="rounded-full bg-live/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-live border border-live/20">
                  Live App
                </span>
              )}
              <Badge tone={statusTone[product.status]}>{statusLabel[product.status]}</Badge>
            </div>
          </div>

          {/* Product name with icon */}
          <h3
            className="mt-3 font-display text-xl font-bold text-surface transition-colors md:text-2xl flex items-center gap-2.5"
          >
            {product.icon && (
              <div
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/90 dark:bg-slate-900/90 p-1 shadow-sm transition-transform duration-300 group-hover:scale-110"
                style={{ border: `1px solid ${accent}35` }}
              >
                <img src={product.icon} alt={`${product.name} icon`} className="h-full w-full object-contain" />
              </div>
            )}
            <span
              className="transition-colors duration-200"
              style={{ color: "var(--cb-surface)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLSpanElement).style.color = accent; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLSpanElement).style.color = "var(--cb-surface)"; }}
            >
              {product.name}
            </span>
          </h3>

          {/* Tagline */}
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide" style={{ color: `${accent}99` }}>
            {product.tagline}
          </p>

          {/* Summary */}
          <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">
            {product.summary}
          </p>

          {/* CTA arrow row */}
          <div
            className="mt-5 flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3 text-slate opacity-80 group-hover:opacity-100"
            style={{ "--hover-accent": accent } as React.CSSProperties}
            onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.color = accent; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.color = ""; }}
          >
            Explore {product.name}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
