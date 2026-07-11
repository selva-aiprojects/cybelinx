"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

export default function GlobeScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  // Gentle mouse tilt tracking for smooth interactive feel
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    damping: 25,
    stiffness: 180,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    damping: 25,
    stiffness: 180,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  if (!mounted) {
    return (
      <div className="relative flex w-full max-w-[380px] sm:max-w-[460px] lg:max-w-[540px] aspect-square items-center justify-center mx-auto py-4" aria-hidden="true">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(96,200,224,0.25),transparent_65%)] blur-3xl" />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex w-full max-w-[380px] sm:max-w-[460px] lg:max-w-[540px] aspect-square items-center justify-center select-none mx-auto py-4"
      aria-label="Cybelinx Enterprise AI & Quantum Globe"
    >
      {/* Soft, clean ambient cyan background glow */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(96,200,224,0.28),transparent_65%)] blur-3xl pointer-events-none" />

      {/* Interactive 3D Parallax Tilt Container with Clean Hero Image */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative z-10 flex h-full w-full items-center justify-center"
      >
        {/* Continuous Gentle Floating Animation */}
        <motion.div
          animate={{
            y: [-6, 6, -6],
          }}
          transition={{
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="relative z-10 flex h-full w-full items-center justify-center"
          style={{ transform: "translateZ(30px)" }}
        >
          <Image
            src="/assets/cybelinx-logo.png"
            alt="Cybelinx High Resolution AI & Quantum Globe"
            width={600}
            height={600}
            priority
            unoptimized
            className="w-full h-full object-contain transition-transform duration-500 hover:scale-105 filter drop-shadow-[0_10px_35px_rgba(96,200,224,0.25)]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
