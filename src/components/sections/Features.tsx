"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BarChart3,
  ShieldCheck,
  Zap,
  FileSearch,
  RefreshCw,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Real-time analytics",
    description:
      "Get instant visibility into your financial data with live dashboards and drill-down reports.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: ShieldCheck,
    title: "Audit-grade accuracy",
    description:
      "Every calculation is traceable. Full audit trail so you're always ready for review.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Zap,
    title: "Blazing fast",
    description:
      "Process thousands of transactions in seconds. No lag, no waiting — just results.",
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    icon: FileSearch,
    title: "Smart reconciliation",
    description:
      "Automatically match transactions across sources and flag discrepancies instantly.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: RefreshCw,
    title: "Auto-sync",
    description:
      "Connect your accounts once and stay in sync. Data updates in the background, always fresh.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: Lock,
    title: "Bank-level security",
    description:
      "256-bit encryption, SOC 2 compliant, and role-based access control built in from day one.",
    color: "bg-rose-50 text-rose-600",
  },
];

function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
  index,
}: (typeof features)[0] & { index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
      className="group relative rounded-2xl border border-gray-100 bg-white p-7 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${color} mb-5`}>
        <Icon size={20} strokeWidth={1.8} />
      </div>
      <h3 className="text-base font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/5 group-hover:ring-gray-900/10 transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
}

export default function Features() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });

  return (
    <section id="features" className="bg-gray-50/50 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-600 uppercase mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Everything your finance team needs
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto text-balance">
            FineLyze brings together the tools that used to live in five different
            spreadsheets — in one clean, fast interface.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
