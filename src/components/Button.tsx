"use client";

import React from "react";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children?: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  target?: string;
  rel?: string;
};

export default function Button({ href, children, variant = "primary", className = "", target, rel }: ButtonProps) {
  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-primary";

  const variants: Record<string, string> = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-sm",
    secondary: "border border-border bg-background text-surface hover:bg-charcoal hover:border-slate/30",
    ghost: "text-slate hover:text-surface hover:bg-charcoal",
  };

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
