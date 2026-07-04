import Link from "next/link";
import { LogoMark } from "./Logo";
import { brand } from "@/lib/content";
import { footerNav } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 md:grid-cols-4 lg:grid-cols-5">
        <div className="col-span-2 lg:col-span-2">
          <div className="flex items-center gap-2">
            <LogoMark size={32} />
            <span className="font-display text-lg font-bold text-white">{brand.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-slate">{brand.description}</p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-slate">Products</h4>
          <ul className="mt-4 space-y-3">
            {footerNav.products.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-surface transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-slate">Capabilities</h4>
          <ul className="mt-4 space-y-3">
            {footerNav.capabilities.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-surface transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-slate">Company</h4>
          <ul className="mt-4 space-y-3">
            {footerNav.company.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-surface transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            {footerNav.resources.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-surface transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/5 px-6 pt-6 text-xs text-slate">
        © {new Date().getFullYear()} {brand.name}. All rights reserved.
      </div>
    </footer>
  );
}
