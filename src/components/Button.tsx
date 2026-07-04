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
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-cyan";

  const variants: Record<string, string> = {
    primary: "bg-brand-gradient text-white shadow-[0_0_24px_rgba(13,71,255,0.35)]",
    secondary: "glass text-white",
    ghost: "text-surface hover:text-white",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
