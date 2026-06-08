"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const perks = [
  "Free 14-day trial",
  "No credit card required",
  "Cancel anytime",
];

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cta" className="relative overflow-hidden bg-gray-900 py-24 sm:py-32">
      {/* Background glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-300 uppercase mb-6">
            Get started today
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 text-balance">
            Stop guessing. Start knowing your{" "}
            <span className="text-blue-400">financials.</span>
          </h2>

          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto text-balance">
            Join hundreds of finance teams who use FineLyze to close faster,
            reconcile smarter, and report with confidence.
          </p>

          {/* Perks */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10"
          >
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-1.5 text-sm text-gray-400">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                {perk}
              </li>
            ))}
          </motion.ul>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="#"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white hover:bg-blue-500 active:scale-95 transition-all duration-200"
            >
              Start free trial
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 active:scale-95 transition-all duration-200"
            >
              See how it works
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
