"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import Button from "./Button";
import { LogoMark } from "./Logo";
import { brand } from "@/lib/content";
import { mainNav, type NavGroup } from "@/lib/navigation";
import { ThemeSelector } from "./ThemeToggle";

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
      <Link href={group.href!} className="text-sm font-medium text-slate transition-colors hover:text-surface">
        {group.label}
      </Link>
    );
  }

  return (
    <div ref={menuRef} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="flex items-center gap-1 text-sm font-medium text-slate transition-colors hover:text-surface cursor-pointer">
        {group.label} <ChevronDown className="h-3.5 w-3.5" />
      </button>
      <div className="absolute left-1/2 -translate-x-1/2 pt-2">
        {open && (
          <div className="z-[9999] w-72 overflow-hidden rounded-xl border border-border bg-nav-bg shadow-xl shadow-black/5">
            <div className="p-2">
              {group.items.map((item) => (
                <div
                  key={item.href}
                  onClick={() => { router.push(item.href); setOpen(false); }}
                  className="cursor-pointer rounded-lg px-4 py-3 transition-colors hover:bg-charcoal"
                >
                  <span className="text-sm font-semibold text-surface">{item.label}</span>
                  {item.description && <span className="mt-0.5 block text-xs text-slate">{item.description}</span>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-border/50 bg-nav-bg backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center shrink-0">
          <LogoMark size={160} />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex shrink-0">
          {mainNav.map((group) => (
            <NavDropdown key={group.label} group={group} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex shrink-0">
          <ThemeSelector />
          <Button href="/contact" variant="secondary">Talk to Sales</Button>
          <Button href="/contact">Get a Demo</Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden shrink-0">
          <ThemeSelector />
          <button className="text-surface p-1.5 cursor-pointer" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute left-0 right-0 top-full z-[9999] border-b border-border bg-nav-bg px-6 py-6 shadow-xl lg:hidden">
          <div className="flex flex-col gap-4">
            {mainNav.map((group) =>
              group.items ? (
                <div key={group.label}>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate">{group.label}</div>
                  <div className="mt-2 flex flex-col gap-2 pl-2">
                    {group.items.map((item) => (
                      <Link key={item.href} href={item.href} className="text-sm text-slate hover:text-surface" onClick={() => setOpen(false)}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={group.label} href={group.href!} className="text-sm text-slate hover:text-surface" onClick={() => setOpen(false)}>
                  {group.label}
                </Link>
              ),
            )}
            <Link href="/contact" className="text-sm text-slate hover:text-surface" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <Button href="/contact">Get a Demo</Button>
          </div>
        </div>
      )}
    </header>
  );
}
