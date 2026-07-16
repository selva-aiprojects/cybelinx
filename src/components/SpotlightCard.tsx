"use client";

import React, { useRef, useState } from "react";
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
        className={`spotlight-card group block rounded-lg p-6 transition-all duration-200 hover:-translate-y-0.5 ${className}`}
      >
        <div className="relative z-10">{children}</div>
      </Link>
    );
  }

  return (
    <div
      ref={cardRef}
      className={`spotlight-card group rounded-lg p-6 transition-all duration-200 hover:-translate-y-0.5 ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
