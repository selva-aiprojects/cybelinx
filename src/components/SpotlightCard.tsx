"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";

interface SpotlightCardProps {
  children?: React.ReactNode;
  href?: string;
  className?: string;
}

export default function SpotlightCard({ children, href, className = "" }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const content = (
    <>
      {/* Specular Top Edge Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 dark:via-cyan-400/30 to-transparent pointer-events-none z-20" />

      {/* Interactive Mouse Spotlight Glow */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(13, 71, 255, 0.12), transparent 70%)`,
          }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </>
  );

  const cardClasses = `spotlight-card glass-card-refined shiny-card gradient-border group relative rounded-2xl p-6 transition-all duration-300 overflow-hidden ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        // @ts-ignore
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`block cursor-pointer ${cardClasses}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cardClasses}
    >
      {content}
    </div>
  );
}
