"use client";

import React from "react";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children?: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "gradient" | "glass" | "shiny";
  size?: "sm" | "md" | "lg";
  className?: string;
  target?: string;
  rel?: string;
  style?: React.CSSProperties;
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  target,
  rel,
  style,
}: ButtonProps) {
  const sizes: Record<string, string> = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5",
  };

  const base =
    "relative inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-primary cursor-pointer select-none overflow-hidden";

  const variants: Record<string, string> = {
    primary:
      "shiny-button bg-gradient-to-r from-primary to-violet text-white shadow-md shadow-primary/25 hover:shadow-glow hover:brightness-110 active:scale-[0.97] border border-white/20",
    gradient:
      "shiny-button bg-gradient-to-r from-primary via-violet to-accent text-white shadow-lg shadow-primary/30 hover:shadow-glow-lg hover:brightness-110 active:scale-[0.97] border border-white/20",
    shiny:
      "shiny-button bg-gradient-to-r from-primary via-accent to-violet text-white shadow-lg shadow-accent/30 hover:shadow-glow-cyan hover:brightness-110 active:scale-[0.97] border border-white/30",
    glass:
      "glass-card-refined text-surface hover:border-primary/60 hover:text-primary hover:shadow-glow hover:bg-primary/10 active:scale-[0.97] backdrop-blur-xl border border-white/20 dark:border-white/10",
    secondary:
      "border border-border/80 bg-background/80 text-surface hover:border-primary/50 hover:text-primary hover:shadow-sm hover:bg-primary/5 active:scale-[0.97] backdrop-blur-md",
    ghost:
      "text-slate hover:text-surface hover:bg-charcoal/80 active:scale-[0.97]",
  };

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      style={style}
    >
      <span className="relative z-10 inline-flex items-center gap-inherit">{children}</span>
    </Link>
  );
}
