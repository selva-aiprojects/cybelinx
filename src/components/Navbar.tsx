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
      <Link href={group.href!} className="font-slug text-xs tracking-wide text-surface/75 transition-colors hover:text-primary">
        {group.label.toUpperCase()}
      </Link>
    );
  }

  return (
    <div ref={menuRef} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="flex items-center gap-1 font-slug text-xs tracking-wide text-surface/75 transition-colors hover:text-primary">
        {group.label.toUpperCase()} <ChevronDown className="h-3.5 w-3.5" />
      </button>
      <div className="absolute left-1/2 -translate-x-1/2 pt-2">
        {open && (
          <div style={{ backgroundColor: "var(--color-background, #01040b)", opacity: 1 }} className="z-[9999] w-68 min-w-0 rounded-2xl border border-surface/20 p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            {group.items.map((item) => (
              <div
                key={item.href}
                onClick={() => { router.push(item.href); setOpen(false); }}
                className="cursor-pointer rounded-lg px-4 py-3 transition-colors hover:bg-primary/10"
              >
                <span className="text-sm font-semibold text-surface">{item.label}</span>
                {item.description && <span className="mt-0.5 block text-xs text-slate">{item.description}</span>}
              </div>
            ))}
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
      style={{
        backgroundColor: "var(--nav-bg, rgba(2, 8, 20, 0.98))",
        borderColor: "var(--nav-border, rgba(96, 200, 224, 0.25))",
        boxShadow: "var(--nav-shadow, 0 10px 35px rgba(1, 4, 11, 0.9), 0 1px 15px rgba(96, 200, 224, 0.18))",
        opacity: 1,
      }}
      className="sticky top-0 z-50 border-b backdrop-blur-3xl transition-all duration-300"
    >
      <div className="mx-auto flex flex-nowrap max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8 py-3.5 gap-4">
        <Link href="/" className="flex items-center shrink-0">
          <LogoMark size={210} />
        </Link>

        <nav className="hidden items-center gap-5 lg:gap-6 xl:flex shrink-0">
          {mainNav.map((group) => (
            <NavDropdown key={group.label} group={group} />
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 xl:flex shrink-0">
          <ThemeSelector />
          <Button href="/contact" variant="secondary">Sign In</Button>
          <Button href="/contact">Get a Demo</Button>
        </div>

        <div className="flex items-center gap-2 xl:hidden shrink-0">
          <ThemeSelector />
          <button className="text-surface p-1.5" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div style={{ backgroundColor: "var(--color-background, #01040b)", opacity: 1 }} className="absolute left-0 right-0 top-full z-[9999] border-b border-surface/20 px-6 py-6 shadow-2xl xl:hidden">
          <div className="flex flex-col gap-4">
            {mainNav.map((group) =>
              group.items ? (
                <div key={group.label}>
                  <div className="font-slug text-[11px] tracking-widest text-slate">{group.label.toUpperCase()}</div>
                  <div className="mt-2 flex flex-col gap-2 pl-2">
                    {group.items.map((item) => (
                      <Link key={item.href} href={item.href} className="text-sm text-surface/85" onClick={() => setOpen(false)}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={group.label} href={group.href!} className="text-sm text-surface/85" onClick={() => setOpen(false)}>
                  {group.label}
                </Link>
              ),
            )}
            <Link href="/contact" className="text-sm text-surface/85" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <Button href="/contact">Get a Demo</Button>
          </div>
        </div>
      )}
    </header>
  );
}
