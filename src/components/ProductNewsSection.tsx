"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, X, Calendar, Layers, ShieldCheck, CheckCircle2, TrendingUp } from "lucide-react";
import { productNews, ProductNewsItem } from "@/lib/news";
import Badge from "./Badge";

export default function ProductNewsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalNews, setActiveModalNews] = useState<ProductNewsItem | null>(null);

  const categories = ["All", "CybeHRMS", "CybeHealth & HMS", "CybePlatforms", "CybeBank", "CybePharma"];

  const filteredNews = productNews.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.productName.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  return (
    <div className="relative w-full">
      {/* Glow background atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[500px] bg-primary/10 blur-[160px] rounded-full pointer-events-none" />

      {/* Header title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="h-3.5 w-3.5 text-primary animate-pulse" />
          <span>Product Updates & Innovations</span>
        </div>
        <h2 className="font-display text-3xl font-bold tracking-tight text-surface sm:text-4xl md:text-5xl">
          Latest news from our product suites.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
          Discover our latest platform releases, AI capability upgrades, regulatory certifications, and enterprise infrastructure milestones.
        </p>

        {/* Filter categories */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-primary text-white shadow-lg shadow-primary/25 border border-primary"
                  : "bg-surface/5 text-slate hover:text-surface hover:bg-surface/10 border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product news grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {filteredNews.map((news) => (
          <div
            key={news.id}
            onClick={() => setActiveModalNews(news)}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer shadow-2xl"
          >
            {/* Glowing top line accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-primary to-indigo-500 opacity-80 group-hover:opacity-100 transition-opacity z-20" />

            {/* Flashy glossy image container */}
            <div className="relative h-56 w-full overflow-hidden bg-slate-950">
              <Image
                src={news.image}
                alt={news.title}
                fill
                unoptimized
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              {/* Category & Date badge on image */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-white bg-slate-900/80 border border-white/20 backdrop-blur-md shadow-md">
                  {news.category}
                </span>
                <span className="flex items-center gap-1 text-[11px] font-mono text-slate-300 bg-slate-900/80 border border-white/10 px-2.5 py-1 rounded-full backdrop-blur-md">
                  <Calendar className="h-3 w-3 text-cyan-400" />
                  {news.date}
                </span>
              </div>

              {/* Product name tag pill */}
              <div className="absolute bottom-3 left-4 z-10">
                <span className="px-2.5 py-1 rounded-lg text-xs font-semibold text-cyan-300 bg-cyan-950/80 border border-cyan-500/30 backdrop-blur-md">
                  {news.productName}
                </span>
              </div>
            </div>

            {/* Card Content Body */}
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 leading-snug">
                {news.title}
              </h3>
              <p className="mt-2 text-xs text-slate-300 line-clamp-2 leading-relaxed">
                {news.subtitle}
              </p>

              {/* Key Metrics strip */}
              <div className="mt-5 grid grid-cols-3 gap-2 py-2.5 px-3 rounded-xl bg-white/5 border border-white/10">
                {news.metrics.map((m, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-xs font-extrabold text-cyan-400 font-mono">{m.value}</div>
                    <div className="text-[9px] text-slate-400 truncate mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Highlights List */}
              <ul className="mt-4 space-y-1.5 flex-1">
                {news.highlights.slice(0, 2).map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{hl}</span>
                  </li>
                ))}
              </ul>

              {/* Read button */}
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/10 text-xs font-bold text-cyan-400 group-hover:text-cyan-300">
                <span>Read Full Announcement</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Dialog Reader */}
      {activeModalNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 bg-slate-900 p-6 sm:p-8 shadow-2xl text-white">
            {/* Close button */}
            <button
              onClick={() => setActiveModalNews(null)}
              className="absolute top-5 right-5 h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header image banner */}
            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 border border-white/10">
              <Image
                src={activeModalNews.image}
                alt={activeModalNews.title}
                fill
                unoptimized
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary text-white shadow-md">
                  {activeModalNews.category}
                </span>
                <h2 className="mt-2 text-xl sm:text-2xl font-bold font-display text-white">
                  {activeModalNews.title}
                </h2>
              </div>
            </div>

            {/* Date & Product tag */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-6">
              <span className="px-3 py-1 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-semibold">
                Product: {activeModalNews.productName}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-mono">
                <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                Published {activeModalNews.date}
              </span>
            </div>

            {/* Key metrics grid in modal */}
            <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 mb-6">
              {activeModalNews.metrics.map((m, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-lg sm:text-xl font-bold text-cyan-400 font-mono">{m.value}</div>
                  <div className="text-xs text-slate-300 mt-1">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Full Story Content */}
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-300">
              {activeModalNews.fullStory.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Highlights bullet list */}
            <div className="mt-6 p-5 rounded-2xl bg-cyan-950/40 border border-cyan-500/30">
              <h4 className="text-sm font-bold text-cyan-300 uppercase tracking-wider mb-3">
                Release Highlights
              </h4>
              <ul className="space-y-2">
                {activeModalNews.highlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA action */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
              <Link
                href={`/products/${activeModalNews.productSlug}`}
                onClick={() => setActiveModalNews(null)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
              >
                <span>Explore {activeModalNews.productName}</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <button
                onClick={() => setActiveModalNews(null)}
                className="px-5 py-3 rounded-xl bg-white/10 text-slate-300 font-semibold text-sm hover:bg-white/20 transition-colors cursor-pointer"
              >
                Close Release
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
