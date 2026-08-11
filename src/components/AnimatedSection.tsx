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
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      {children}
    </motion.div>
  );
}
