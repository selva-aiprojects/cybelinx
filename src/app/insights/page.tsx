"use client";

import { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";
import ProductNewsSection from "@/components/ProductNewsSection";
import AnimatedSection from "@/components/AnimatedSection";
import { insights } from "@/lib/content";
import { ArrowUpRight, BookOpen, Clock, Filter, Mail, Send, CheckCircle2 } from "lucide-react";

const categories = [
  "All",
  "Product Engineering",
  "AI & HCM",
  "Healthcare & Compliance",
  "Cloud & Platform",
  "AI Services",
  "AI & Platform",
  "R&D",
];

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filtered =
    activeCategory === "All"
      ? insights
      : insights.filter((a) => a.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  return (
    <>
      <Section className="pt-16 pb-4">
        <AnimatedSection>
          <PageHeader
            eyebrow="Insights & Technical Perspectives"
            title="Architectural briefs & platform engineering research."
            description="Deep dives from our platform architects, AI researchers, and distributed systems leads on engineering enduring multi-tenant intelligence systems."
          />
        </AnimatedSection>
      </Section>

      {/* Featured Product News Section */}
      <Section textured glow className="py-8">
        <AnimatedSection>
          <ProductNewsSection />
        </AnimatedSection>
      </Section>

      {/* Category Filter Pills */}
      <Section className="py-6">
        <AnimatedSection>
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="h-4 w-4 text-slate/50 mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-sm"
                    : "border border-border bg-background text-slate hover:text-surface"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Articles Grid */}
      <Section textured className="py-8">
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((article, i) => (
            <AnimatedSection key={article.slug} delay={i * 0.05}>
              <Link
                href={`/insights/${article.slug}`}
                className="group flex flex-col justify-between h-full rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg cursor-pointer"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate/70 mb-3">
                    <span className="rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{article.readingTime}</span>
                      <span>&middot;</span>
                      <span>{article.date}</span>
                    </div>
                  </div>

                  <h2 className="font-display text-xl font-bold text-surface group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h2>

                  <p className="mt-3 text-xs leading-relaxed text-slate line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-violet text-[10px] font-bold text-white">
                      {article.author.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-surface">{article.author}</div>
                      <div className="text-[10px] text-slate/60">{article.authorRole}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-bold text-primary group-hover:translate-x-1 transition-transform">
                    Read brief
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Engineering Newsletter Subscription Box */}
      <Section className="py-12">
        <AnimatedSection>
          <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-violet/10 p-8 md:p-12 text-center max-w-3xl mx-auto shadow-lg">
            <Mail className="mx-auto h-8 w-8 text-primary mb-3" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-surface">
              Cybelinx Engineering Dispatches
            </h2>
            <p className="mt-2 text-sm text-slate max-w-xl mx-auto">
              Get monthly architecture blueprints, NIST post-quantum migration guides, and production AI patterns delivered directly to your inbox. No marketing spam.
            </p>

            {subscribed ? (
              <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-live/30 bg-live/10 px-5 py-3 text-sm font-bold text-live">
                <CheckCircle2 className="h-5 w-5" />
                Subscribed! You&apos;ll receive our next technical dispatch.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="engineering-lead@company.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm text-surface placeholder:text-slate/40 focus:border-primary focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </AnimatedSection>
      </Section>

      <Section>
        <CTABand
          heading="Have an architecture challenge?"
          subheading="Schedule a technical working session with our platform leads to review your enterprise topology."
        />
      </Section>
    </>
  );
}
