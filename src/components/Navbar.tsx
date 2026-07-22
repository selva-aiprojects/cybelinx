"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import Button from "./Button";
import { LogoLockup, LogoMark } from "./Logo";
import { brand } from "@/lib/content";
import { mainNav, type NavGroup } from "@/lib/navigation";

function NavDropdown({ group }: { group: NavGroup }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  if (!group.items) {
    return (
      <Link
        href={group.href!}
        className="text-sm font-medium text-slate transition-colors hover:text-surface"
      >
        {group.label}
      </Link>
    );
  }

  return (
    <div
      ref={menuRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 text-sm font-medium text-slate transition-colors hover:text-surface cursor-pointer py-1">
        {group.label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Mega-menu panel */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        style={{ zIndex: 9999 }}
      >
        <div className="w-80 overflow-hidden rounded-2xl border border-border/60 bg-nav-bg shadow-2xl shadow-black/10 backdrop-blur-xl">
          {/* Panel header */}
          <div className="px-4 pt-4 pb-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate/50">
              {group.label}
            </span>
          </div>

          {/* Items */}
          <div className="p-2">
            {group.items.map((item) => (
              <div
                key={item.href}
                onClick={() => {
                  router.push(item.href);
                  setOpen(false);
                }}
                className="group/item cursor-pointer rounded-xl px-4 py-3 transition-all hover:bg-primary/5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-surface group-hover/item:text-primary transition-colors">
                    {item.label}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-slate/0 group-hover/item:text-primary/60 transition-all -translate-x-1 group-hover/item:translate-x-0" />
                </div>
                {item.description && (
                  <span className="mt-0.5 block text-xs text-slate leading-relaxed">
                    {item.description}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Panel footer CTA */}
          <div className="border-t border-border/40 px-4 py-3">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-violet transition-colors"
            >
              Talk to our team
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/50 bg-nav-bg shadow-sm shadow-black/5 backdrop-blur-xl"
          : "border-b border-transparent bg-nav-bg backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 group">
          <span className="hidden sm:block">
            <LogoLockup height={72} />
          </span>
          <span className="block sm:hidden">
            <LogoMark size={44} />
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex shrink-0">
          {mainNav.map((group) => (
            <NavDropdown key={group.label} group={group} />
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 lg:flex shrink-0">
          <Button href="/contact" variant="secondary" size="sm">
            Talk to Sales
          </Button>
          <Button href="/contact" variant="primary" size="sm">
            Get a Demo
          </Button>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 lg:hidden shrink-0">
          <button
            className="rounded-lg p-1.5 text-surface hover:bg-charcoal transition-colors cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute left-0 right-0 top-full z-[9999] border-b border-border bg-nav-bg backdrop-blur-xl shadow-2xl shadow-black/10 lg:hidden">
          <div className="px-6 py-6 flex flex-col gap-5">
            {mainNav.map((group) =>
              group.items ? (
                <div key={group.label}>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate/50 mb-2">
                    {group.label}
                  </div>
                  <div className="flex flex-col gap-1 pl-1">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-slate hover:text-surface hover:bg-charcoal transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        <ArrowRight className="h-3 w-3 text-primary/60" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={group.label}
                  href={group.href!}
                  className="text-sm font-medium text-slate hover:text-surface transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {group.label}
                </Link>
              ),
            )}
            <div className="pt-2 border-t border-border flex flex-col gap-2">
              <Button href="/contact" variant="secondary" size="sm">
                Talk to Sales
              </Button>
              <Button href="/contact" variant="primary" size="sm">
                Get a Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
