"use client";

import React, { useRef } from "react";
import Link from "next/link";

interface SpotlightCardProps {
  children?: React.ReactNode;
  href?: string;
  className?: string;
}

export default function SpotlightCard({ children, href, className = "" }: SpotlightCardProps) {
  const cardRef = useRef<any>(null);

  if (href) {
    return (
      <Link
        href={href}
        ref={cardRef}
        className={`spotlight-card gradient-border group block cursor-pointer rounded-2xl p-6 transition-all duration-250 ${className}`}
      >
        <div className="relative z-10">{children}</div>
      </Link>
    );
  }

  return (
    <div
      ref={cardRef}
      className={`spotlight-card gradient-border group rounded-2xl p-6 transition-all duration-250 ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
