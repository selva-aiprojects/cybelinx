"use client";

import React from "react";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children?: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg";
  className?: string;
  target?: string;
  rel?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  target,
  rel,
}: ButtonProps) {
  const sizes: Record<string, string> = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5",
  };

  const base =
    "relative inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-primary cursor-pointer select-none";

  const variants: Record<string, string> = {
    primary:
      "bg-gradient-to-r from-primary to-violet text-white shadow-sm shadow-primary/30 hover:shadow-glow hover:brightness-110 active:scale-[0.97]",
    gradient:
      "bg-gradient-to-r from-primary via-violet to-accent text-white shadow-sm shadow-primary/30 hover:shadow-glow-lg hover:brightness-110 active:scale-[0.97]",
    secondary:
      "border border-border bg-background text-surface hover:border-primary/50 hover:text-primary hover:shadow-sm hover:bg-primary/5 active:scale-[0.97]",
    ghost:
      "text-slate hover:text-surface hover:bg-charcoal active:scale-[0.97]",
  };

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
