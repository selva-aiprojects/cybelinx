"use client";

import React from "react";
import { brand } from "@/lib/content";

interface LogoProps {
  size?: number;
  height?: number;
  className?: string;
}

/* ─── Icon-only mark (shield + C) ─── */
function LogoMarkSvg({ w, h }: { w: number; h: number }) {
  return (
    <svg width={w} height={h} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#7928ca" />
          <stop offset="50%" stopColor="#4facfe" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <path d="M24 2 L44 12 L44 26 Q44 38 24 46 Q4 38 4 26 L4 12 Z" fill="url(#lg)" opacity="0.15" />
      <path d="M24 2 L44 12 L44 26 Q44 38 24 46 Q4 38 4 26 L4 12 Z" stroke="url(#lg)" strokeWidth="1.5" />
      <path d="M24 8 L38 15.5 L38 26 Q38 34 24 40 Q10 34 10 26 L10 15.5 Z" fill="url(#lg)" opacity="0.08" />
      <text x="24" y="31" textAnchor="middle" fontSize="22" fontWeight="800" fontFamily="Inter, sans-serif" fill="url(#lg)">C</text>
    </svg>
  );
}

/* ─── Wordmark (CYBELINX + tagline) ─── */
function Wordmark({ h }: { h: number }) {
  const fontSize = Math.round(h * 0.42);
  const tagSize = Math.round(h * 0.13);
  return (
    <div className="flex flex-col justify-center leading-none" style={{ height: h }}>
      <span
        className="font-bold tracking-tight bg-gradient-to-r from-purple via-primary to-cyan bg-clip-text text-transparent"
        style={{ fontSize, lineHeight: 1.1 }}
      >
        {brand.name}
      </span>
      <span
        className="text-slate/50 font-medium tracking-[0.15em] uppercase"
        style={{ fontSize: tagSize, lineHeight: 1.6 }}
      >
        Engineering Intelligent Products
      </span>
    </div>
  );
}

/**
 * LogoMark: Shield + "C" icon only
 */
export function LogoMark({ size = 66, className = "" }: LogoProps) {
  return (
    <div className={`shrink-0 ${className}`} style={{ width: size, height: size }}>
      <LogoMarkSvg w={size} h={size} />
    </div>
  );
}

/**
 * LogoLockup: Shield icon + wordmark side by side
 */
export function LogoLockup({ height = 78, className = "" }: LogoProps) {
  const iconSize = Math.round(height * 0.65);
  return (
    <div className={`inline-flex items-center gap-3 shrink-0 ${className}`} style={{ height }}>
      <LogoMarkSvg w={iconSize} h={iconSize} />
      <Wordmark h={height} />
    </div>
  );
}

/**
 * LogoCompact: Smaller lockup for tight layouts
 */
export function LogoCompact({ size = 54, className = "" }: LogoProps) {
  return <LogoLockup height={size} className={className} />;
}

export default LogoLockup;
