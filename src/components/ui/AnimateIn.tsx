"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUp } from "@/lib/motion";

interface AnimateInProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}

export default function AnimateIn({
  children,
  variants = fadeUp,
  className,
  delay = 0,
}: AnimateInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
