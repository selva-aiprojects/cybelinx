import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-primary";

  const variants: Record<string, string> = {
    primary: "bg-brand-gradient text-ink shadow-[0_0_28px_rgba(227,168,87,0.28)]",
    secondary: "frame text-surface hover:border-primary/40",
    ghost: "text-surface/80 hover:text-primary",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
