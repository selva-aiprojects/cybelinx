import Link from "next/link";
import { LogoLockup } from "./Logo";
import { brand } from "@/lib/content";
import { footerNav } from "@/lib/navigation";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/company/cybelinx", icon: Linkedin },
  { label: "Twitter / X", href: "https://twitter.com/cybelinx", icon: Twitter },
  { label: "GitHub", href: "https://github.com/cybelinx", icon: Github },
  { label: "Email", href: `mailto:${brand.email}`, icon: Mail },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-0 bg-charcoal">
      {/* Subtle glow border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-violet/30" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(rgba(79,70,229,1) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />

      {/* Ambient orb */}
      <div
        className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-primary/8 blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-6">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center">
              <LogoLockup height={48} />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate/90">
              {brand.description}
            </p>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-slate/50">
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
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-background/50 text-slate/60 transition-all hover:border-primary/50 hover:bg-primary/8 hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-surface mb-4">Products</h4>
            <ul className="space-y-3">
              {footerNav.products.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-slate transition-colors hover:text-surface hover:text-shadow-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-surface mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerNav.resources.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-slate transition-colors hover:text-surface hover:text-shadow-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-surface mb-4">Company</h4>
            <ul className="space-y-3">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-slate transition-colors hover:text-surface hover:text-shadow-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {footerNav.capabilities.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-slate transition-colors hover:text-surface hover:text-shadow-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-surface mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-slate transition-colors hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-slate transition-colors hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-sm text-slate transition-colors hover:text-primary">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-slate transition-colors hover:text-primary">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-border/40 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-slate/50">
              &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
            </span>
            <div className="flex items-center gap-2 text-xs text-slate/40">
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
