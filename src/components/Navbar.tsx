"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
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
    case "cybefintech":
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
  const menuId = `nav-${group.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

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

  useEffect(() => {
    if (!open) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
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
      onFocusCapture={() => setOpen(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 dark:text-white/70 transition-colors hover:text-primary dark:hover:text-white group py-2"
        aria-expanded={open}
        aria-controls={menuId}
      >
        <span>{group.label}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-all duration-300 ${open ? "rotate-180 translate-y-0.5" : ""} group-hover:text-primary`}
        />
      </button>

      <div
        id={menuId}
        className={`absolute left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-3 pointer-events-none"
          }`}
        style={{ zIndex: 9999 }}
      >
        {group.label === "Products" ? (
          <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white/98 shadow-2xl shadow-blue-500/15 backdrop-blur-2xl w-[780px] max-w-[calc(100vw-2rem)] dark:bg-slate-950/98 dark:border-slate-800 p-6">
            
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                  Categorized Portfolio Architecture
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-0.5">
                  Regulated Markets, Enterprise Operations & Core PaaS Runtime
                </h3>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[11px] font-bold border border-emerald-500/25">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Industry Isolated
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {(["Regulated Markets", "Enterprise Operations", "Core PaaS & AI"] as const).map((catName) => {
                const catItems = group.items?.filter((item) => item.category === catName) || [];
                const catBadgeColors: Record<string, string> = {
                  "Regulated Markets": "text-rose-600 bg-rose-500/10 border-rose-500/30",
                  "Enterprise Operations": "text-amber-600 bg-amber-500/10 border-amber-500/30",
                  "Core PaaS & AI": "text-indigo-600 bg-indigo-500/10 border-indigo-500/30",
                };

                return (
                  <div key={catName} className="flex flex-col gap-2">
                    <div className="pb-1.5 mb-1 border-b border-slate-100 dark:border-slate-800">
                      <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border ${catBadgeColors[catName]}`}>
                        {catName}
                      </span>
                    </div>

                    {catItems.map((item) => {
                      const slug = item.href.replace("/products/", "");
                      const product = getPortfolioProduct(slug);
                      const accentColor = product?.colorAccent || "#0D47FF";
                      const iconSrc = product?.icon || "/assets/icons/icon-ai.png";

                      return (
                        <Link
                          href={item.href}
                          key={item.href} 
                          className="group/item relative rounded-xl border p-2.5 transition-all duration-200 hover:shadow-md cursor-pointer text-left"
                          style={{
                            backgroundColor: `${accentColor}08`,
                            borderColor: `${accentColor}25`,
                          }}
                          onClick={() => setOpen(false)}
                        >
                          <div className="flex items-start gap-2.5">
                            <div 
                              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg p-1 transition-transform duration-200 group-hover/item:scale-105 shadow-xs bg-white dark:bg-slate-900 mt-0.5"
                              style={{ border: `1px solid ${accentColor}35` }}
                            >
                              <img src={iconSrc} alt={`${item.label} icon`} className="h-full w-full object-contain" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover/item:text-primary transition-colors truncate">
                                {item.label}
                              </h4>
                              <p className="text-[10px] leading-tight text-slate-500 dark:text-slate-400 line-clamp-2 mt-0.5 font-medium">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
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
                <Link
                  href={item.href}
                  key={item.href}
                  onClick={() => setOpen(false)}
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
                </Link>
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
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme") as "light" | "dark" | "sales" | "colorful" | null;
    const initialTheme = storedTheme || "colorful";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const focusMenu = window.setTimeout(() => mobileMenuRef.current?.focus(), 0);
      return () => {
        window.clearTimeout(focusMenu);
        document.body.style.overflow = "";
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  const handleMobileMenuKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
      return;
    }
    if (event.key !== "Tab" || !mobileMenuRef.current) return;

    const focusable = Array.from(
      mobileMenuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const themeOrder: ("light" | "dark" | "sales" | "colorful")[] = ["light", "dark", "sales", "colorful"];
    const currentIndex = themeOrder.indexOf(theme as any);
    const nextTheme = themeOrder[(currentIndex + 1) % themeOrder.length];
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem("theme", nextTheme);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#000b21]/80 backdrop-blur-2xl border-b border-white/20 dark:border-cyan-500/20 shadow-xl shadow-primary/5"
          : "bg-white/60 dark:bg-[#000b21]/60 backdrop-blur-xl border-b border-white/10 dark:border-cyan-500/10 shadow-sm"
      }`}
    >
      {/* Specular top highlight line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 dark:via-cyan-400/40 to-transparent pointer-events-none" />

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3.5 sm:gap-4 sm:px-6 xl:gap-6">
        <Link href="/" className="mr-1.5 flex items-center shrink-0 group sm:mr-6">
          <span className="hidden sm:block">
            <LogoLockup height={64} />
          </span>
          <span className="block sm:hidden">
            <LogoLockup height={40} />
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex xl:gap-6 shrink-0">
          {mainNav.map((group) => (
            <NavDropdown key={group.label} group={group} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex shrink-0">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme mode"
            title={`Current theme: ${theme.toUpperCase()} (Click to switch)`}
            className="shiny-badge flex items-center gap-1.5 cursor-pointer py-1.5 px-3.5 hover:scale-105 transition-transform"
          >
            {theme === "light" && (
              <>
                <Moon className="h-3.5 w-3.5 text-primary" />
                <span className="hidden 2xl:inline text-primary font-bold">Light</span>
              </>
            )}
            {theme === "dark" && (
              <>
                <Sun className="h-3.5 w-3.5 text-amber-400" />
                <span className="hidden 2xl:inline text-amber-300 font-bold">Dark</span>
              </>
            )}
            {theme === "sales" && (
              <>
                <Zap className="h-3.5 w-3.5 text-amber-500 animate-pulse" />
                <span className="hidden 2xl:inline text-amber-600 dark:text-amber-400 font-extrabold">⚡ Palm</span>
              </>
            )}
            {theme === "colorful" && (
              <>
                <Sparkles className="h-3.5 w-3.5 text-pink-500" />
                <span className="hidden 2xl:inline shiny-text font-extrabold">Colorful</span>
              </>
            )}
          </button>
          <Button href="/contact" variant="glass" size="sm">
            Talk to Sales
          </Button>
          <Button href="/contact" variant="shiny" size="sm">
            Get a Demo
          </Button>
        </div>

        <div className="flex items-center gap-2 xl:hidden shrink-0">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme mode"
            className="flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold transition-all border border-slate-200 dark:border-white/15 bg-slate-50 dark:bg-white/5"
          >
            {theme === "light" && <Moon className="h-4 w-4 text-slate-700" />}
            {theme === "dark" && <Sun className="h-4 w-4 text-amber-400" />}
            {theme === "sales" && <Zap className="h-4 w-4 text-cyan-400 animate-pulse" />}
            {theme === "colorful" && <Sparkles className="h-4 w-4 text-pink-500" />}
          </button>
          <button
            ref={mobileMenuButtonRef}
            className="h-12 w-12 flex items-center justify-center rounded-full text-brand-navy-800 dark:text-brand-navy-100 hover:bg-brand-navy-50 dark:hover:bg-brand-navy-800/80 focus:outline-none transition-colors cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </header>

      {open && (
        <div 
          id="mobile-navigation"
          ref={mobileMenuRef}
          className="fixed inset-0 z-[9999] bg-background/95 backdrop-blur-2xl dark:bg-brand-navy-900/95 xl:hidden overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Main navigation"
          tabIndex={-1}
          onKeyDown={handleMobileMenuKeyDown}
          onClick={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-brand-navy-100 dark:border-brand-navy-800">
            <Link href="/" onClick={() => setOpen(false)}>
              <LogoLockup height={54} />
            </Link>
            <button
              className="h-10 w-10 flex items-center justify-center text-brand-navy-500 rounded-full hover:bg-brand-navy-50 dark:hover:bg-brand-navy-800 transition-colors cursor-pointer"
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
    </>
  );
}
