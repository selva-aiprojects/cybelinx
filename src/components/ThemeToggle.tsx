"use client";

import { useEffect, useState, useRef } from "react";
import { Moon, Sun, Check } from "lucide-react";

export type ThemeId = "light" | "dark";

export interface ThemeOption {
  id: ThemeId;
  name: string;
  icon: typeof Moon;
}

export const themes: ThemeOption[] = [
  {
    id: "light",
    name: "Light",
    icon: Sun,
  },
  {
    id: "dark",
    name: "Dark",
    icon: Moon,
  },
];

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeId>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("cybelinx-theme") as ThemeId | null;
    if (stored && themes.some((t) => t.id === stored)) {
      setThemeState(stored);
      document.documentElement.setAttribute("data-theme", stored);
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const setTheme = (newTheme: ThemeId) => {
    setThemeState(newTheme);
    localStorage.setItem("cybelinx-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return { theme, setTheme, mounted };
}

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
      <div className="h-8 w-8 rounded-full border border-border animate-pulse" />
    );
  }

  const currentTheme = themes.find((t) => t.id === theme) || themes[0];
  const Icon = currentTheme.icon;

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex h-8 items-center gap-1.5 rounded-full border border-border bg-nav-bg px-3 py-1.5 text-xs font-medium text-surface transition-all hover:border-primary/30"
        title="Switch Theme"
        aria-label="Switch Theme"
      >
        <Icon className="h-3.5 w-3.5" />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 z-[9999] w-48 rounded-lg border border-border bg-nav-bg p-1.5 shadow-lg">
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
                className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors ${
                  active
                    ? "bg-primary/10 font-semibold text-primary"
                    : "text-slate hover:bg-charcoal hover:text-surface"
                }`}
              >
                <TIcon className="h-4 w-4" />
                <span>{t.name}</span>
                {active && <Check className="ml-auto h-4 w-4" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function FloatingThemeSwitcher() {
  const { theme, setTheme, mounted } = useTheme();

  if (!mounted) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[80] flex items-center gap-1 rounded-full border border-border bg-nav-bg p-1 shadow-md">
      {themes.map((t) => {
        const TIcon = t.icon;
        const active = t.id === theme;
        return (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            className={`flex h-8 items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all ${
              active
                ? "bg-primary text-white shadow-sm"
                : "text-slate hover:bg-charcoal hover:text-surface"
            }`}
            title={t.name}
          >
            <TIcon className="h-3.5 w-3.5" />
            <span className="hidden md:inline">{t.name}</span>
          </button>
        );
      })}
    </div>
  );
}
