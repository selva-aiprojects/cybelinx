"use client";

import { useState } from "react";
import Link from "next/link";
import { LogoLockup } from "./Logo";
import { brand } from "@/lib/content";
import { footerNav } from "@/lib/navigation";
import { Linkedin, Twitter, Github, Mail, ShieldCheck, Send, CheckCircle2, ArrowRight } from "lucide-react";

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/company/cybelinx", icon: Linkedin },
  { label: "Twitter / X", href: "https://twitter.com/cybelinx", icon: Twitter },
  { label: "GitHub", href: "https://github.com/cybelinx", icon: Github },
  { label: "Email", href: `mailto:${brand.email}`, icon: Mail },
];

const complianceBadges = ["SOC 2 Type II", "ISO 27001", "GDPR", "HIPAA Ready", "NIST PQC Ready", "ABDM Compliant"];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="relative overflow-hidden border-t-0 section-alt">
      {/* Top gradient fade from background into footer */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-violet/15" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(rgba(13,71,255,1) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />

      {/* Ambient orb */}
      <div
        className="absolute -top-32 right-0 h-96 w-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(13,71,255,0.05), transparent 70%)" }}
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 h-64 w-64 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(123,97,255,0.04), transparent 70%)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-10">
        {/* ── Newsletter Strip ────────────────────────────────────── */}
        <div className="mb-14 rounded-3xl border border-border/80 bg-background/60 p-6 md:p-8 backdrop-blur-md shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary">Enterprise Dispatch</div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-surface mt-1">
                Stay updated with engineering releases & platform research.
              </h3>
              <p className="mt-1.5 text-xs text-slate/70 max-w-xl">
                Get monthly deep dives on multi-cloud SRE, AI governance, and NIST post-quantum security direct to your inbox.
              </p>
            </div>

            {subscribed ? (
              <div className="inline-flex items-center gap-2 rounded-xl border border-live/30 bg-live/10 px-5 py-3 text-xs font-bold text-live">
                <CheckCircle2 className="h-4 w-4" />
                Subscribed to Cybelinx Dispatches!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 w-full lg:w-auto">
                <input
                  type="email"
                  required
                  placeholder="name@enterprise.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-xl border border-border bg-background px-4 py-2.5 text-xs text-surface placeholder:text-slate/40 focus:border-primary focus:outline-none min-w-[240px]"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-white transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5 shrink-0"
                >
                  <Send className="h-3.5 w-3.5" />
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* ── Main Nav Grid ────────────────────────────────────────── */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-6">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center">
              <LogoLockup height={56} />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate/80">
              {brand.description}
            </p>
            <p className="mt-2 max-w-xs text-xs leading-relaxed text-slate/45">
              {brand.address}
            </p>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-background/50 text-slate/50 transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary hover:-translate-y-0.5"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-surface mb-5">Products</h4>
            <ul className="space-y-3">
              {footerNav.products.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-slate/70 transition-colors hover:text-surface link-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-surface mb-5">Resources</h4>
            <ul className="space-y-3">
              {footerNav.resources.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-slate/70 transition-colors hover:text-surface link-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-surface mb-5">Company</h4>
            <ul className="space-y-3">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-slate/70 transition-colors hover:text-surface link-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {footerNav.capabilities.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-slate/70 transition-colors hover:text-surface link-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Governance */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-surface mb-5">Trust & Legal</h4>
            <ul className="space-y-3">
              {[
                { href: "/security", label: "Security & Compliance" },
                { href: "/ai-governance", label: "AI Ethics & Governance" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
                { href: "/pricing", label: "Pricing & Plans" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate/70 transition-colors hover:text-primary link-underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Compliance badges row */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {complianceBadges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-background/50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate/50"
            >
              <ShieldCheck className="h-3 w-3 text-primary/40" />
              {badge}
            </span>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-border/30 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-slate/40">
              &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
            </span>
            <div className="flex items-center gap-2 text-xs text-slate/35">
              <span>Built in Bangalore</span>
              <span className="text-base">🇮🇳</span>
              <span>·</span>
              <span>Deployed Globally</span>
              <span className="h-1.5 w-1.5 rounded-full bg-live animate-pulse ml-1" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
