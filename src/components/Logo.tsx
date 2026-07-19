"use client";

import Image from "next/image";
import { brand } from "@/lib/content";

/* ─── Hardcoded Brand Assets ─────────────────────── */
const LOGO_SRC = "/logo.png";

/* ─── LogoMark ───────────────────────────────────── */
/** Small icon-only logo mark - using the full logo here but bounded by size */
export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <img
      src={LOGO_SRC}
      alt={brand.name}
      style={{ 
        height: size, 
        width: "auto",
        mixBlendMode: "darken",
        filter: "contrast(1.2) brightness(1.05)"
      }}
      className="object-contain mix-blend-darken"
    />
  );
}

/* ─── LogoLockup ─────────────────────────────────── */
/**
 * Full logo lockup image (icon + text), rendered directly from the user's provided file.
 */
export function LogoLockup({ height = 44 }: { height?: number }) {
  return (
    <img
      src={LOGO_SRC}
      alt={brand.name}
      style={{ 
        height, 
        width: "auto",
        mixBlendMode: "darken",
        filter: "contrast(1.2) brightness(1.05)"
      }}
      className="object-contain mix-blend-darken"
    />
  );
}

/* ─── LogoCompact ────────────────────────────────── */
/** Icon + wordmark only — for mobile / tight spaces */
export function LogoCompact({ size = 28 }: { size?: number }) {
  return (
    <img
      src={LOGO_SRC}
      alt={brand.name}
      style={{ 
        height: size, 
        width: "auto",
        mixBlendMode: "darken",
        filter: "contrast(1.2) brightness(1.05)"
      }}
      className="object-contain mix-blend-darken"
    />
  );
}
