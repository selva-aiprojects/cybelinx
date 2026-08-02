import Link from "next/link";
import { LogoLockup } from "./Logo";
import { brand } from "@/lib/content";
import { footerNav } from "@/lib/navigation";
import { Linkedin, Twitter, Github, Mail, ShieldCheck } from "lucide-react";

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/company/cybelinx", icon: Linkedin },
  { label: "Twitter / X", href: "https://twitter.com/cybelinx", icon: Twitter },
  { label: "GitHub", href: "https://github.com/cybelinx", icon: Github },
  { label: "Email", href: `mailto:${brand.email}`, icon: Mail },
];

const complianceBadges = ["SOC 2 Type II", "ISO 27001", "GDPR", "HIPAA Ready"];

export default function Footer() {
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
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-6">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center">
              <LogoLockup height={64} />
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

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-surface mb-5">Legal</h4>
            <ul className="space-y-3">
              {[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
                { href: "/security", label: "Security" },
                { href: "/pricing", label: "Pricing" },
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
