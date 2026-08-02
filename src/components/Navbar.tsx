"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles, 
  ExternalLink, 
  Moon, 
  Sun, 
  Zap,
  Palette,
  Users, 
  Building2, 
  Pill, 
  Landmark, 
  HeartPulse, 
  ShoppingBag, 
  Cpu 
} from "lucide-react";
import Button from "./Button";
import { LogoLockup, LogoMark } from "./Logo";
import { brand } from "@/lib/content";
import { mainNav, type NavGroup } from "@/lib/navigation";
import { getPortfolioProduct } from "@/lib/products";

const getProductIcon = (slug: string) => {
  switch (slug) {
    case "cybehrms":
      return Users;
    case "cybehms":
      return Building2;
    case "cybepharma":
      return Pill;
    case "cybebank":
      return Landmark;
    case "cybehealth":
      return HeartPulse;
    case "cybecommerce":
      return ShoppingBag;
    case "cybeai-suite":
    default:
      return Cpu;
  }
};

function NavDropdown({ group }: { group: NavGroup }) {
  const [open, setOpen] = useState(false);
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);
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
        className="relative text-sm font-semibold text-gray-700 dark:text-white/70 transition-colors hover:text-primary dark:hover:text-white after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:rounded-full after:transition-all after:duration-300 hover:after:w-full"
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
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 dark:text-white/70 transition-colors hover:text-primary dark:hover:text-white group py-2"
        aria-expanded={open}
      >
        <span>{group.label}</span>
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
          <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white/98 shadow-2xl shadow-blue-500/15 backdrop-blur-2xl w-[730px] dark:bg-slate-950/98 dark:border-slate-800 p-6">
            
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                  Enterprise Platform Portfolio
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-0.5">
                  AI-Native Solutions for Regulated Industries
                </h3>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[11px] font-bold border border-emerald-500/25">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                2 Apps Live in Production
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {group.items.map((item) => {
                const slug = item.href.replace("/products/", "");
                const product = getPortfolioProduct(slug);
                const subProducts = product?.portfolioProducts || [];
                const accentColor = product?.colorAccent || "#0D47FF";
                const iconSrc = product?.icon || "/cybelinx-icon.png";

                return (
                  <div 
                    key={item.href} 
                    className="group/item relative rounded-2xl border p-3.5 transition-all duration-200 hover:shadow-lg cursor-pointer"
                    style={{
                      backgroundColor: `${accentColor}0b`,
                      borderColor: `${accentColor}28`,
                    }}
                    onClick={() => {
                      router.push(item.href);
                      setOpen(false);
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div 
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl p-1.5 transition-transform duration-200 group-hover/item:scale-105 shadow-md shadow-slate-200/50 dark:shadow-none mt-0.5 bg-white dark:bg-slate-900"
                        style={{
                          border: `1px solid ${accentColor}40`
                        }}
                      >
                        <img src={iconSrc} alt={`${item.label} icon`} className="h-full w-full object-contain" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5 truncate">
                            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover/item:text-primary transition-colors truncate">
                              {item.label}
                            </h4>
                          </div>
                          {product?.status === "live" && (
                            <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-extrabold uppercase text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 shrink-0">
                              Live
                            </span>
                          )}
                          {product?.status === "preview" && (
                            <span className="rounded-full bg-cyan-500/10 px-2 py-0.5 text-[9px] font-extrabold uppercase text-cyan-700 dark:text-cyan-400 border border-cyan-500/30 shrink-0">
                              Preview
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-xs leading-snug text-slate-600 dark:text-slate-400 line-clamp-2 font-medium">
                          {product?.tagline || item.description}
                        </p>
                      </div>
                    </div>

                    {subProducts.length > 0 && (
                      <div className="mt-2.5 pt-2.5 border-t border-slate-200/60 dark:border-slate-800 flex flex-wrap gap-1.5">
                        {subProducts.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.url || item.href}
                            target={subItem.url?.startsWith("http") ? "_blank" : undefined}
                            rel={subItem.url?.startsWith("http") ? "noopener noreferrer" : undefined}
                            onClick={(e) => {
                              e.stopPropagation();
                              setOpen(false);
                            }}
                            className="inline-flex items-center gap-1 rounded-md bg-white dark:bg-slate-900 px-2 py-0.5 text-[10px] font-bold text-slate-700 dark:text-slate-300 hover:text-primary hover:bg-primary/10 border border-slate-200 dark:border-slate-700 shadow-xs transition-colors"
                          >
                            <span>{subItem.name}</span>
                            <ArrowRight className="h-2.5 w-2.5 opacity-60" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-border/40 flex items-center justify-between">
              <Link
                href="/products"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-violet transition-colors group"
              >
                <Sparkles className="h-4 w-4" />
                Explore All Products & Platform Core
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate hover:text-surface transition-colors"
              >
                Schedule Demo &rarr;
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
    const storedTheme = window.localStorage.getItem("theme") as "light" | "dark" | "sales" | null;
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
    const themeOrder: ("light" | "dark" | "sales")[] = ["light", "dark", "sales"];
    const currentIndex = themeOrder.indexOf(theme as any);
    const nextTheme = themeOrder[(currentIndex + 1) % themeOrder.length];
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    window.localStorage.setItem("theme", nextTheme);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-white dark:bg-[#000b21] border-b ${
        scrolled
          ? "border-border/50 shadow-lg shadow-primary/5 backdrop-blur-2xl"
          : "border-border/30 shadow-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center shrink-0 group">
          <span className="hidden sm:block">
            <LogoLockup height={72} />
          </span>
          <span className="block sm:hidden">
            <LogoLockup height={60} />
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
            aria-label="Toggle theme mode"
            title={`Current theme: ${theme.toUpperCase()} (Click to switch)`}
            className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold transition-all border border-slate-200 dark:border-white/15 hover:border-primary/40 bg-slate-50 dark:bg-white/5 cursor-pointer"
          >
            {theme === "light" && (
              <>
                <Moon className="h-3.5 w-3.5 text-slate-700" />
                <span className="text-slate-700">Light</span>
              </>
            )}
            {theme === "dark" && (
              <>
                <Sun className="h-3.5 w-3.5 text-amber-400" />
                <span className="text-white/90">Dark</span>
              </>
            )}
            {theme === "sales" && (
              <>
                <Zap className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
                <span className="text-cyan-400 font-extrabold">⚡ Sales</span>
              </>
            )}
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
            aria-label="Toggle theme mode"
            className="flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold transition-all border border-slate-200 dark:border-white/15 bg-slate-50 dark:bg-white/5"
          >
            {theme === "light" && <Moon className="h-4 w-4 text-slate-700" />}
            {theme === "dark" && <Sun className="h-4 w-4 text-amber-400" />}
            {theme === "sales" && <Zap className="h-4 w-4 text-cyan-400 animate-pulse" />}
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
        <div className="fixed left-0 right-0 top-0 z-[9999] h-screen bg-nav-bg/95 dark:bg-[#011232]/95 backdrop-blur-2xl lg:hidden overflow-y-auto">
          <div className="flex items-center justify-between px-6 py-4 border-b border-border/30 dark:border-border/20">
            <Link href="/" onClick={() => setOpen(false)}>
              <LogoLockup height={54} />
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
            {mainNav.map((group, groupIdx) =>
              group.items ? (
                <div
                  key={group.label}
                  className="stagger-child"
                  style={{ animationDelay: `${groupIdx * 60}ms` }}
                >
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
                            {(() => {
                              const IconComp = getProductIcon(slug);
                              const accentColor = product?.colorAccent || '#0D47FF';
                              return (
                                <div 
                                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl p-2 transition-transform duration-200"
                                  style={{
                                    backgroundColor: `${accentColor}18`,
                                    border: `1px solid ${accentColor}35`
                                  }}
                                >
                                  <IconComp className="h-4 w-4" style={{ color: accentColor }} />
                                </div>
                              );
                            })()}
                            <div>
                              <div className="font-bold text-surface">{item.label}</div>
                              {item.description && (
                                <div className="text-xs text-slate/60 mt-0.5">{item.description}</div>
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
