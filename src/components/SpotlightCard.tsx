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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const styleProps = {
    "--mouse-x": `${mousePos.x}px`,
    "--mouse-y": `${mousePos.y}px`,
  } as React.CSSProperties;

  if (href) {
    return (
      <Link
        href={href}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        style={styleProps}
        className={`spotlight-card group block rounded-2xl p-6 transition-all duration-300 hover:border-cyan/40 hover:-translate-y-1 ${className}`}
      >
        <div className="relative z-10">{children}</div>
      </Link>
    );
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      style={styleProps}
      className={`spotlight-card group rounded-2xl p-6 transition-all duration-300 hover:border-cyan/30 hover:-translate-y-1 ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
