import Link from "next/link";
import { LogoMark } from "./Logo";
import { products } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 md:grid-cols-4">
        <div className="col-span-2">
          <div className="flex items-center gap-2">
            <LogoMark size={32} />
            <span className="text-lg font-bold text-white">Cybelinx</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-slate">
            Engineering Intelligent Enterprises — AI-native SaaS platforms built for the way real teams work.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-slate">Products</h4>
          <ul className="mt-4 space-y-3">
            {products.map((p) => (
              <li key={p.slug}>
                <Link href={`/products/${p.slug}`} className="text-sm text-surface hover:text-white">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-slate">Company</h4>
          <ul className="mt-4 space-y-3">
            <li>
              <Link href="/about" className="text-sm text-surface hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/careers" className="text-sm text-surface hover:text-white">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-surface hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/5 px-6 pt-6 text-xs text-slate">
        © {new Date().getFullYear()} Cybelinx. All rights reserved.
      </div>
    </footer>
  );
}
