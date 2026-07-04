"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Button from "./Button";
import { LogoMark } from "./Logo";
import { products } from "@/lib/products";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <LogoMark size={36} />
          <span className="text-lg font-bold text-white">Cybelinx</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-surface hover:text-white">
              Products <ChevronDown className="h-4 w-4" />
            </button>
            {productsOpen && (
              <div className="glass absolute left-0 top-full mt-2 w-64 rounded-xl p-2">
                {products.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/products/${p.slug}`}
                    className="block rounded-lg px-4 py-3 text-sm text-surface hover:bg-white/5 hover:text-white"
                  >
                    <div className="font-semibold">{p.name}</div>
                    <div className="text-xs text-slate">{p.tagline}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/about" className="text-sm font-medium text-surface hover:text-white">
            About
          </Link>
          <Link href="/careers" className="text-sm font-medium text-surface hover:text-white">
            Careers
          </Link>
          <Link href="/contact" className="text-sm font-medium text-surface hover:text-white">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button href="/contact">Request a Demo</Button>
        </div>

        <button className="text-white md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {products.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="text-sm text-surface">
                {p.name}
              </Link>
            ))}
            <Link href="/about" className="text-sm text-surface">
              About
            </Link>
            <Link href="/careers" className="text-sm text-surface">
              Careers
            </Link>
            <Link href="/contact" className="text-sm text-surface">
              Contact
            </Link>
            <Button href="/contact">Request a Demo</Button>
          </div>
        </div>
      )}
    </header>
  );
}
