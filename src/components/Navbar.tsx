"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight, Sparkles, ExternalLink, Moon, Sun } from "lucide-react";
import Button from "./Button";
import { LogoLockup, LogoMark } from "./Logo";
import { brand } from "@/lib/content";
import { mainNav, type NavGroup } from "@/lib/navigation";
import { getPortfolioProduct } from "@/lib/products";

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
        className="text-sm font-medium text-slate transition-colors hover:text-surface relative after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
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
      <button className="flex items-center gap-1 text-sm font-medium text-slate transition-colors hover:text-surface cursor-pointer py-1 group">
        {group.label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-all duration-300 ${open ? "rotate-180 translate-y-0.5" : ""} group-hover:text-primary`}
        />
      </button>

      <div
        className={`absolute left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-3 pointer-events-none"
          }`}
        style={{ zIndex: 9999 }}
      >
        {group.label === "Products" ? (
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-nav-bg/95 shadow-xl shadow-primary/5 backdrop-blur-2xl min-w-[800px]">
            <div className="flex items-center justify-between px-6 pt-5 pb-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate/40">
                Product Portfolio
              </span>
              <Link
                href="/products"
                onClick={() => setOpen(false)}
                className="text-xs font-medium text-primary hover:text-violet transition-colors"
              >
                View all products &rarr;
              </Link>
            </div>

            <div className="p-3 grid grid-cols-3 gap-2">
              {group.items.map((item) => {
                const slug = item.href.replace("/products/", "");
                const product = getPortfolioProduct(slug);
                const subProducts = product?.portfolioProducts;
                const imgSrc = product?.image;
                const accent = product?.colorAccent || "#6366F1";

                return (
                  <div
                    key={item.href}
                    className="rounded-xl p-3 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group/card relative overflow-hidden"
                    style={{ background: `linear-gradient(135deg, color-mix(in srgb, ${accent} 4%, transparent), transparent 60%)` }}
                    onMouseEnter={(e) => {
                      const target = e.currentTarget;
                      target.style.background = `linear-gradient(135deg, color-mix(in srgb, ${accent} 10%, transparent), transparent 60%)`;
                      target.style.borderColor = `${accent}30`;
                    }}
                    onMouseLeave={(e) => {
                      const target = e.currentTarget;
                      target.style.background = `linear-gradient(135deg, color-mix(in srgb, ${accent} 4%, transparent), transparent 60%)`;
                      target.style.borderColor = "transparent";
                    }}
                  >
                    <div
                      className="absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-300"
                      style={{ background: `linear-gradient(to bottom, ${accent}, transparent)` }}
                    />

                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-start gap-3 mb-2"
                    >
                      <div
                        className="h-11 w-11 shrink-0 rounded-xl overflow-hidden flex items-center justify-center transition-all duration-300"
                        style={{ boxShadow: `0 1px 3px rgba(0,0,0,0.08), 0 0 0 1px ${accent}30`, backgroundColor: `${accent}15` }}
                      >
                        {imgSrc ? (
                          <img src={imgSrc} alt="" className="h-full w-full object-cover" />
                        ) : (
                          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: accent }} />
                        )}
                      </div>
                      <div className="flex-1 min-w-0 pt-0.5">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className="text-sm font-semibold text-surface transition-colors truncate"
                            style={{ color: "var(--cb-surface)" }}
                          >
                            {item.label}
                          </span>
                          {product?.status && (
                            <span
                              className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full shrink-0"
                              style={{
                                backgroundColor: product.status === "live" ? `${accent}20` :
                                  product.status === "preview" ? "#f59e0b33" :
                                    "#64748b33",
                                color: product.status === "live" ? accent :
                                  product.status === "preview" ? "#f59e0b" :
                                    "#94a3b8",
                              }}
                            >
                              {product.status === "live" ? "Live" : product.status === "preview" ? "Preview" : "Soon"}
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-slate/50 mt-0.5 block">{product?.category || ""}</span>
                      </div>
                    </Link>

                    {subProducts && subProducts.length > 0 && (
                      <div className="ml-[52px] flex flex-col gap-0.5">
                        {subProducts.map((sp) => (
                          <a
                            key={sp.name}
                            href={sp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs transition-all group/sub"
                            style={{ color: "var(--cb-slate)" }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = accent;
                              e.currentTarget.style.backgroundColor = `${accent}10`;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = "var(--cb-slate)";
                              e.currentTarget.style.backgroundColor = "transparent";
                            }}
                          >
                            <div className="h-1 w-1 rounded-full shrink-0" style={{ backgroundColor: `${accent}60` }} />
                            <span className="font-medium truncate">{sp.name}</span>
                            <ExternalLink className="h-2.5 w-2.5 shrink-0 opacity-30 ml-auto" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="border-t border-border/30 px-6 py-4 flex items-center justify-between">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-xs font-semibold text-primary hover:text-violet transition-colors group"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Talk to our team
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/products"
                onClick={() => setOpen(false)}
                className="text-xs text-slate/50 hover:text-surface transition-colors"
              >
                Browse all products &rarr;
              </Link>
            </div>
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-nav-bg/95 shadow-xl shadow-primary/5 backdrop-blur-2xl min-w-[320px]">
            <div className="px-5 pt-4 pb-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate/40">
                {group.label}
              </span>
            </div>

            <div className="p-2">
              {group.items.map((item, idx) => (
                <div
                  key={item.href}
                  onClick={() => {
                    router.push(item.href);
                    setOpen(false);
                  }}
                  className="group/item cursor-pointer rounded-xl px-4 py-3 transition-all duration-200 hover:bg-primary/5 relative"
                  style={{
                    animationDelay: `${idx * 40}ms`,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover/item:bg-primary transition-colors shrink-0" />
                      <span className="text-sm font-semibold text-surface group-hover/item:text-primary transition-colors">
                        {item.label}
                      </span>
                    </div>
                    <ArrowRight className="h-3.5 w-3.5 text-slate/0 group-hover/item:text-primary/60 transition-all -translate-x-2 group-hover/item:translate-x-0" />
                  </div>
                  {item.description && (
                    <span className="mt-0.5 block text-xs text-slate/70 leading-relaxed pl-7">
                      {item.description}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="border-t border-border/30 px-5 py-3.5">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-xs font-semibold text-primary hover:text-violet transition-colors group"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Talk to our team
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = storedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    window.localStorage.setItem("theme", nextTheme);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 bg-white/95 dark:bg-nav-bg/70 ${scrolled
        ? "border-b border-border/40 shadow-lg shadow-primary/5 backdrop-blur-2xl"
        : "border-b border-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center shrink-0 group">
          <span className="hidden sm:block">
            <LogoLockup height={72} />
          </span>
          <span className="block sm:hidden">
            <LogoMark size={60} />
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex shrink-0">
          {mainNav.map((group) => (
            <NavDropdown key={group.label} group={group} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex shrink-0">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="rounded-full p-2 text-slate hover:bg-slate/10 transition-colors"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Button href="/contact" variant="secondary" size="sm">
            Talk to Sales
          </Button>
          <Button href="/contact" variant="primary" size="sm">
            Get a Demo
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden shrink-0">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="rounded-full p-2 text-slate hover:bg-slate/10 transition-colors"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            className="rounded-lg p-2 text-surface hover:bg-charcoal/50 transition-colors cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed left-0 right-0 top-0 z-[9999] h-screen bg-nav-bg/95 backdrop-blur-2xl lg:hidden overflow-y-auto">
          <div className="flex items-center justify-between px-6 py-4 border-b border-border/30">
            <Link href="/" onClick={() => setOpen(false)}>
              <LogoMark size={54} />
            </Link>
            <button
              className="rounded-lg p-2 text-surface hover:bg-charcoal/50 transition-colors cursor-pointer"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="px-6 py-6 flex flex-col gap-6">
            {mainNav.map((group) =>
              group.items ? (
                <div key={group.label}>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate/40 mb-3">
                    {group.label}
                  </div>
                  <div className="flex flex-col gap-1">
                    {group.items.map((item) => {
                      const slug = item.href.replace("/products/", "");
                      const product = getPortfolioProduct(slug);
                      const subProducts = product?.portfolioProducts;

                      return (
                        <div key={item.href}>
                          <Link
                            href={item.href}
                            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate hover:text-surface hover:bg-charcoal/50 transition-all"
                            onClick={() => setOpen(false)}
                          >
                            <div className="h-8 w-8 shrink-0 rounded-lg overflow-hidden bg-charcoal/60 ring-1 ring-border/20 flex items-center justify-center">
                              {product?.image ? (
                                <img src={product.image} alt="" className="h-full w-full object-cover" />
                              ) : (
                                <div className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                              )}
                            </div>
                            <div>
                              <div>{item.label}</div>
                              {item.description && (
                                <div className="text-xs text-slate/50 mt-0.5">{item.description}</div>
                              )}
                            </div>
                          </Link>
                          {subProducts && subProducts.length > 0 && (
                            <div className="ml-6 pl-4 border-l border-border/30 flex flex-col gap-0.5">
                              {subProducts.map((sp) => (
                                <a
                                  key={sp.name}
                                  href={sp.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-xs text-slate/60 hover:text-primary hover:bg-charcoal/30 transition-all"
                                >
                                  {sp.name}
                                  <ExternalLink className="h-3 w-3 shrink-0 opacity-40" />
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <Link
                  key={group.label}
                  href={group.href!}
                  className="flex items-center gap-3 text-sm font-medium text-slate hover:text-surface transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-primary/40 shrink-0" />
                  {group.label}
                </Link>
              ),
            )}
            <div className="pt-4 border-t border-border/30 flex flex-col gap-3">
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
