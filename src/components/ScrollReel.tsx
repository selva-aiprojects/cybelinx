"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 250, damping: 30, restDelta: 0.001 });

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] bg-white/5">
      <motion.div
        className="h-full origin-left bg-glow-gradient shadow-[0_0_15px_#60c8e0,0_0_30px_#4a9fdf] relative"
        style={{ scaleX }}
      >
        {/* Glowing Neon Tip */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2.5 w-2.5 translate-x-1/2 rounded-full bg-cyan shadow-[0_0_12px_#60c8e0,0_0_24px_#3b82f6]" />
      </motion.div>
    </div>
  );
}
