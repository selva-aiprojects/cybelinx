"use client";

import React from "react";
import { brand } from "@/lib/content";

interface LogoProps {
  size?: number;
  height?: number;
  className?: string;
}

const LOGO_IMAGE_SRC = "/cyblinx-logo.jpg";

/**
 * LogoMark: Renders the iconic metallic Shield & C-Maze emblem from cyblinx-logo.jpg
 */
export function LogoMark({ size = 44, className = "" }: LogoProps) {
  return (
    <div 
      className={`relative overflow-hidden shrink-0 rounded-lg ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={LOGO_IMAGE_SRC}
        alt={brand.name}
        className="absolute top-0 left-0 h-full w-auto max-w-none object-cover object-left"
        style={{ height: size }}
      />
    </div>
  );
}

/**
 * LogoLockup: Renders the full metallic logo lockup (Shield emblem + CYBELINX + Engineering Intelligent Products)
 */
export function LogoLockup({ height = 52, className = "" }: LogoProps) {
  return (
    <div className={`inline-flex items-center shrink-0 ${className}`} style={{ height }}>
      <img
        src={LOGO_IMAGE_SRC}
        alt={`${brand.name} - Engineering Intelligent Products`}
        style={{ height, width: "auto" }}
        className="h-full w-auto object-contain transition-transform duration-300 hover:scale-[1.02] drop-shadow-md"
      />
    </div>
  );
}

/**
 * LogoCompact: Compact version of the logo for tight layouts
 */
export function LogoCompact({ size = 36, className = "" }: LogoProps) {
  return <LogoLockup height={size} className={className} />;
}

export default LogoLockup;
