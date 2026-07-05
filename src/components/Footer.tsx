import Link from "next/link";
import { LogoMark } from "./Logo";
import { brand } from "@/lib/content";
import { footerNav } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-surface/10 py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 pt-4 md:grid-cols-4 lg:grid-cols-5">
        <div className="col-span-2 lg:col-span-2">
          <div className="flex items-center">
            <LogoMark size={84} />
          </div>
          <p className="mt-4 max-w-sm text-sm text-slate">{brand.description}</p>
          <p className="mt-4 max-w-sm font-slug text-xs leading-relaxed text-slate/80">{brand.address}</p>
        </div>

        <div>
          <h4 className="font-slug text-[10px] tracking-widest text-slate">Products</h4>
          <ul className="mt-4 space-y-3">
            {footerNav.products.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-surface/85 transition-colors hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-slug text-[10px] tracking-widest text-slate">Resources</h4>
          <ul className="mt-4 space-y-3">
            {footerNav.resources.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-surface/85 transition-colors hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-slug text-[10px] tracking-widest text-slate">Company</h4>
          <ul className="mt-4 space-y-3">
            {footerNav.company.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-surface/85 transition-colors hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
            {footerNav.capabilities.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-surface/85 transition-colors hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-surface/10 px-6 pt-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="font-slug text-[11px] tracking-widest text-slate">
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
          </span>
          <span className="font-slug text-[11px] uppercase tracking-widest text-slate">Bangalore &middot; Global Delivery</span>
        </div>
      </div>
    </footer>
  );
}
