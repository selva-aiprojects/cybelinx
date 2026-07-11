"use client";

import { useEffect, useState, useRef } from "react";
import { Moon, Sun, Sparkles, Palette, Check } from "lucide-react";

export type ThemeId = "dark" | "light" | "emerald" | "sunset";

export interface ThemeOption {
  id: ThemeId;
  name: string;
  description: string;
  icon: typeof Moon;
  colors: {
    bg: string;
    primary: string;
    accent: string;
  };
}

export const themes: ThemeOption[] = [
  {
    id: "dark",
    name: "Cyber Dark",
    description: "Classic deep blue cyber aesthetic",
    icon: Moon,
    colors: { bg: "#01040B", primary: "#4A9FDF", accent: "#60C8E0" },
  },
  {
    id: "light",
    name: "Pro White & Blue",
    description: "Executive crisp white with royal blue",
    icon: Sun,
    colors: { bg: "#F8FAFC", primary: "#1E6091", accent: "#0284C7" },
  },
  {
    id: "emerald",
    name: "Aurora Emerald",
    description: "Pleasant soothing mint & emerald",
    icon: Sparkles,
    colors: { bg: "#031316", primary: "#10B981", accent: "#2DD4BF" },
  },
  {
    id: "sunset",
    name: "Velvet Sunset",
    description: "Warm ambient midnight lavender",
    icon: Palette,
    colors: { bg: "#0B0614", primary: "#C084FC", accent: "#F43F5E" },
  },
];

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeId>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("cybelinx-theme") as ThemeId | null;
    if (stored && themes.some((t) => t.id === stored)) {
      setThemeState(stored);
      document.documentElement.setAttribute("data-theme", stored);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const setTheme = (newTheme: ThemeId) => {
    setThemeState(newTheme);
    localStorage.setItem("cybelinx-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    window.dispatchEvent(new Event("theme-changed"));
  };

  return { theme, setTheme, mounted };
}

/** Dropdown / Pill selector for the main Navbar */
export function ThemeSelector() {
  const { theme, setTheme, mounted } = useTheme();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-full border border-surface/10 bg-surface/5 animate-pulse" />
    );
  }

  const currentTheme = themes.find((t) => t.id === theme) || themes[0];
  const Icon = currentTheme.icon;

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex h-9 items-center gap-2 rounded-full border border-cyan/25 bg-surface/10 px-3 py-1.5 text-xs font-semibold text-surface transition-all hover:border-cyan/50 hover:bg-surface/20"
        title="Switch Theme"
        aria-label="Switch Theme"
      >
        <Icon className="h-3.5 w-3.5 text-cyan" />
        <span className="hidden sm:inline font-slug tracking-wide">{currentTheme.name}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 z-[9999] w-64 rounded-2xl border border-surface/15 bg-ink p-2 shadow-2xl backdrop-blur-2xl">
          <div className="px-3 py-2 border-b border-surface/10">
            <span className="font-slug text-[11px] tracking-widest text-slate uppercase">Theme Palette</span>
          </div>
          <div className="mt-1 flex flex-col gap-1">
            {themes.map((t) => {
              const TIcon = t.icon;
              const active = t.id === theme;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setOpen(false);
                  }}
                  className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-left transition-all ${
                    active
                      ? "bg-primary/20 border border-primary/40 text-surface shadow-sm"
                      : "hover:bg-surface/10 text-surface/80 hover:text-surface border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 shadow-inner"
                      style={{ backgroundColor: t.colors.bg }}
                    >
                      <TIcon
                        className="h-3.5 w-3.5"
                        style={{ color: active ? "#ffffff" : t.colors.accent }}
                      />
                    </div>
                    <div>
                      <div className="text-xs font-bold leading-tight">{t.name}</div>
                      <div className="text-[10px] text-slate leading-tight">{t.description}</div>
                    </div>
                  </div>
                  {active && <Check className="h-4 w-4 text-primary shrink-0 ml-2" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

/** Floating Quick Switcher widget fixed at bottom right */
export function FloatingThemeSwitcher() {
  const { theme, setTheme, mounted } = useTheme();

  if (!mounted) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[80] flex items-center gap-1.5 rounded-full border border-surface/20 bg-ink/90 p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(96,200,224,0.15)] backdrop-blur-2xl transition-all duration-300 hover:scale-105">
      {themes.map((t) => {
        const TIcon = t.icon;
        const active = t.id === theme;
        return (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            className={`group relative flex h-8 items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all ${
              active
                ? "bg-cyan text-ink shadow-[0_0_15px_rgba(96,200,224,0.6)] font-bold scale-105"
                : "text-surface/80 hover:bg-surface/10 hover:text-surface"
            }`}
            title={t.name}
          >
            <TIcon className={`h-3.5 w-3.5 ${active ? "text-ink" : "text-cyan"}`} />
            <span className="hidden md:inline font-slug tracking-wide text-[11px]">{t.name}</span>
          </button>
        );
      })}
    </div>
  );
}
