"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type AnimatedSectionProps = {
  children?: ReactNode;
  className?: string;
  delay?: number;
};

export default function AnimatedSection({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
