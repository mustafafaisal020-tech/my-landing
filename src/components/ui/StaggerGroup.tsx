"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";

interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
}

export default function StaggerGroup({ children, className }: StaggerGroupProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}
