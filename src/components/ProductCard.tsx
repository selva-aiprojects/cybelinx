"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Badge from "./Badge";
import { Product } from "@/lib/products";

const statusTone: Record<Product["status"], "live" | "new" | "soon"> = {
  live: "live",
  preview: "new",
  "coming-soon": "soon",
};

const statusLabel: Record<Product["status"], string> = {
  live: "Live",
  preview: "Preview",
  "coming-soon": "Coming Soon",
};

export default function ProductCard({ product }: { product: Product }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 350, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 350, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setMousePos({ x: mouseX, y: mouseY });

    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        "--mouse-x": `${mousePos.x}px`,
        "--mouse-y": `${mousePos.y}px`,
      } as React.CSSProperties}
      className="spotlight-card group flex flex-col justify-between rounded-2xl p-8 transition-all duration-300 hover:border-cyan/40 hover:shadow-[0_20px_50px_rgba(1,4,11,0.7),0_0_35px_rgba(96,200,224,0.18)]"
    >
      <Link href={`/products/${product.slug}`} className="flex flex-col justify-between h-full z-10">
        <div>
          {product.image && (
            <div className="relative mb-6 h-52 w-full overflow-hidden rounded-xl border border-surface/10 bg-surface/[0.04]">
              <Image
                src={product.image}
                alt={`${product.name} UI/UX Pro Max Dashboard Mockup`}
                fill
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60" />
            </div>
          )}
          <div className="flex items-center justify-between gap-3">
            <span className="slugline">{product.category}</span>
            <div className="flex items-center gap-2">
              {product.appUrl && (
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400 border border-emerald-500/20 shadow-[0_0_12px_rgba(16,185,129,0.2)] animate-pulse">
                  Live App
                </span>
              )}
              <Badge tone={statusTone[product.status]}>{statusLabel[product.status]}</Badge>
            </div>
          </div>
          <h3 className="font-display mt-4 text-2xl font-bold text-surface transition-colors group-hover:text-cyan">
            {product.name}
          </h3>
          <p className="mt-1 font-slug text-xs tracking-wide text-primary">{product.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed text-surface/85">{product.summary}</p>
        </div>
        <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-cyan transition-colors">
          Explore {product.name}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 group-hover:scale-110" />
        </div>
      </Link>
    </motion.div>
  );
}
