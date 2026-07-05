import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  target?: string;
  rel?: string;
};

export default function Button({ href, children, variant = "primary", className = "", target, rel }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-primary";

  const variants: Record<string, string> = {
    primary: "bg-brand-gradient text-white shadow-[0_0_28px_rgba(74,159,223,0.35)]",
    secondary: "frame text-surface hover:border-cyan/40",
    ghost: "text-surface/80 hover:text-primary",
  };

  return (
    <Link href={href} target={target} rel={rel} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
