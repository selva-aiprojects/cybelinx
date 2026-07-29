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
const LOGO_ICON_SRC = "/cybelinx-icon.png";

/**
 * LogoMark: Brand icon only
 */
export function LogoMark({ size = 66, className = "" }: LogoProps) {
  return (
    <div
      className={`shrink-0 overflow-hidden rounded-lg ${className}`}
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
 * LogoLockup: Full logo (icon + wordmark)
 */
export function LogoLockup({ height = 78, className = "" }: LogoProps) {
  return (
    <div className={`inline-flex items-center shrink-0 ${className}`} style={{ height }}>
      <img
        src={LOGO_LOCKUP_LIGHT_SRC}
        alt={`${brand.name} - Engineering Intelligent Products`}
        style={{ height, width: "auto" }}
        className="h-full w-auto object-contain transition-transform duration-300 hover:scale-[1.02] drop-shadow-md dark:hidden"
      />
      <img
        src={LOGO_LOCKUP_DARK_SRC}
        alt={`${brand.name} - Engineering Intelligent Products`}
        style={{ height, width: "auto" }}
        className="hidden h-full w-auto object-contain transition-transform duration-300 hover:scale-[1.02] drop-shadow-md dark:block"
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
