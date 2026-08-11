"use client";

import React from "react";
import { brand } from "@/lib/content";

interface LogoProps {
  size?: number;
  height?: number;
  className?: string;
}

const LOGO_LOCKUP_LIGHT_SRC = "/cybelinx-logo.png";
const LOGO_LOCKUP_DARK_SRC = "/cybelinx-logo-dark.png";
const LOGO_WORDMARK_SRC = "/cybelinx-wordmark.png";
const LOGO_ICON_SRC = "/cybelinx-logo-embelem.png";

/**
 * LogoMark: Original brand emblem icon (100% Transparent PNG)
 */
export function LogoMark({ size = 66, className = "" }: LogoProps) {
  return (
    <div
      className={`shrink-0 overflow-hidden ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={LOGO_ICON_SRC}
        alt={brand.name}
        className="h-full w-full object-contain"
      />
    </div>
  );
}

/**
 * LogoLockup: Original full logo lockup (100% Transparent PNG)
 * Displays natively over all light and dark header & footer background colors.
 */
export function LogoLockup({ height = 72, className = "" }: LogoProps) {
  return (
    <div className={`inline-flex items-center shrink-0 ${className}`} style={{ height }}>
      {/* Light Mode Original Logo Image */}
      <img
        src={LOGO_LOCKUP_LIGHT_SRC}
        alt={`${brand.name} - Engineering Intelligent Products`}
        style={{ height, width: "auto" }}
        className="h-full w-auto object-contain transition-transform duration-300 hover:scale-[1.02] dark:hidden"
      />
      {/* Dark Mode Original Logo Image */}
      <img
        src={LOGO_LOCKUP_DARK_SRC}
        alt={`${brand.name} - Engineering Intelligent Products`}
        style={{ height, width: "auto" }}
        className="hidden h-full w-auto object-contain transition-transform duration-300 hover:scale-[1.02] dark:block"
      />
    </div>
  );
}

/**
 * LogoCompact: Smaller lockup for tight layouts
 */
export function LogoCompact({ size = 54, className = "" }: LogoProps) {
  return (
    <div className={`inline-flex items-center shrink-0 ${className}`} style={{ height: size }}>
      <img
        src={LOGO_WORDMARK_SRC}
        alt={brand.name}
        style={{ height: size, width: "auto" }}
        className="h-full w-auto object-contain"
      />
    </div>
  );
}

export default LogoLockup;
