"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Button from "./Button";
import { LogoMark } from "./Logo";
import { brand } from "@/lib/content";
import { mainNav, type NavGroup } from "@/lib/navigation";

function NavDropdown({ group }: { group: NavGroup }) {
  const [open, setOpen] = useState(false);

  if (!group.items) {
    return (
      <Link href={group.href!} className="font-slug text-xs tracking-wide text-surface/75 transition-colors hover:text-primary">
        {group.label.toUpperCase()}
      </Link>
    );
  }

  const handleItemClick = (href: string) => {
    window.location.href = href;
  };

  return (
    <div className="relative pointer-events-auto" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="pointer-events-auto flex items-center gap-1 font-slug text-xs tracking-wide text-surface/75 transition-colors hover:text-primary">
        {group.label.toUpperCase()} <ChevronDown className="h-3.5 w-3.5" />
      </button>
      {open && (
        <div className="frame pointer-events-auto absolute left-0 top-full z-[9999] mt-2 w-72 rounded-md p-2 bg-ink/95 shadow-2xl">
          {group.items.map((item) => (
            <div
              key={item.href}
              onClick={() => handleItemClick(item.href)}
              className="pointer-events-auto cursor-pointer block w-full rounded-sm px-4 py-3 transition-colors hover:bg-primary/10"
            >
              <span className="text-sm font-semibold text-surface">{item.label}</span>
              {item.description && <span className="mt-1 block text-xs text-slate">{item.description}</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-6 z-50 border-b border-surface/10 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <LogoMark size={34} />
          <span className="font-display text-lg font-semibold text-surface">{brand.name}</span>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {mainNav.map((group) => (
            <NavDropdown key={group.label} group={group} />
          ))}
        </nav>

        <div className="hidden xl:block">
          <Button href="/contact">Contact</Button>
        </div>

        <button className="text-surface xl:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-surface/10 px-6 py-4 xl:hidden">
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
            <Button href="/contact">Talk to Us</Button>
          </div>
        </div>
      )}
    </header>
  );
}
