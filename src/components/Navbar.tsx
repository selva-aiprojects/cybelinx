"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import Button from "./Button";
import { LogoMark } from "./Logo";
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
          <div className="z-[9999] w-64 min-w-0 rounded-2xl border border-surface/10 p-2 bg-ink shadow-2xl">
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
    <header className="sticky top-0 z-50 border-b border-cyan/25 bg-[#020814]/95 backdrop-blur-2xl shadow-[0_10px_35px_rgba(1,4,11,0.9),0_1px_15px_rgba(96,200,224,0.18)] relative transition-all duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <LogoMark size={264} />
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {mainNav.map((group) => (
            <NavDropdown key={group.label} group={group} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Button href="/contact" variant="secondary">Sign In</Button>
          <Button href="/contact">Get a Demo</Button>
        </div>

        <button className="text-surface xl:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="absolute left-0 right-0 top-full z-50 border-t border-surface/10 bg-background px-6 py-4 xl:hidden">
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
