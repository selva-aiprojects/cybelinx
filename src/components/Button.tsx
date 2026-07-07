"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type ButtonProps = {
  href: string;
  children?: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  target?: string;
  rel?: string;
};

export default function Button({ href, children, variant = "primary", className = "", target, rel }: ButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 400, damping: 25 });
  const springY = useSpring(y, { stiffness: 400, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Magnetic pull strength
    x.set(distanceX * 0.25);
    y.set(distanceY * 0.25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-bold tracking-wide transition-all duration-200 focus-visible:outline-2 focus-visible:outline-primary overflow-hidden group";

  const variants: Record<string, string> = {
    primary: "bg-brand-gradient text-white shadow-[0_0_28px_rgba(74,159,223,0.4)] hover:shadow-[0_0_38px_rgba(96,200,224,0.6)] hover:border-cyan/50 border border-transparent",
    secondary: "frame text-surface hover:border-cyan/50 hover:bg-surface/[0.08] hover:shadow-[0_0_25px_rgba(96,200,224,0.2)]",
    ghost: "text-surface/80 hover:text-cyan hover:bg-primary/10",
  };

  return (
    <motion.div style={{ x: springX, y: springY }} className="inline-block">
      <Link
        href={href}
        target={target}
        rel={rel}
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {/* Subtle shimmer sheen sweep on hover for primary/secondary */}
        {variant !== "ghost" && (
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" />
        )}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </Link>
    </motion.div>
  );
}
