import Link from "next/link";
import { LogoMark } from "./Logo";
import { brand } from "@/lib/content";
import { footerNav } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-charcoal">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 py-16 md:grid-cols-4 lg:grid-cols-5">
        <div className="col-span-2 lg:col-span-2">
          <div className="flex items-center">
            <LogoMark size={72} />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate">{brand.description}</p>
          <p className="mt-3 max-w-xs text-xs leading-relaxed text-slate/70">{brand.address}</p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-surface">Products</h4>
          <ul className="mt-4 space-y-3">
            {footerNav.products.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-slate transition-colors hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-surface">Resources</h4>
          <ul className="mt-4 space-y-3">
            {footerNav.resources.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-slate transition-colors hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-surface">Company</h4>
          <ul className="mt-4 space-y-3">
            {footerNav.company.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-slate transition-colors hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
            {footerNav.capabilities.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-slate transition-colors hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-surface">Legal</h4>
          <ul className="mt-4 space-y-3">
            <li>
              <Link href="/privacy" className="text-sm text-slate transition-colors hover:text-primary">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms" className="text-sm text-slate transition-colors hover:text-primary">Terms of Service</Link>
            </li>
            <li>
              <Link href="/security" className="text-sm text-slate transition-colors hover:text-primary">Security</Link>
            </li>
            <li>
              <Link href="/pricing" className="text-sm text-slate transition-colors hover:text-primary">Pricing</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl border-t border-border px-6 py-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-slate">
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
          </span>
          <span className="text-xs uppercase tracking-wide text-slate">Bangalore &middot; Global Delivery</span>
        </div>
      </div>
    </footer>
  );
}
