import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";
import StaggerGroup from "@/components/ui/StaggerGroup";
import { fadeDown, fadeUp } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-20">
      <StaggerGroup className="container-max section-padding text-center">
        <AnimateIn variants={fadeDown}>
          <span className="inline-block rounded-full bg-gray-100 px-4 py-1.5 text-xs font-semibold tracking-wide text-gray-600 uppercase mb-6">
            Now in public beta
          </span>
        </AnimateIn>

        <AnimateIn>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 text-balance mb-6">
            Build something <span className="text-blue-600">amazing</span>
          </h1>
        </AnimateIn>

        <AnimateIn>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-500 text-balance mb-10">
            The fastest way to ship your idea. Everything you need — in one place,
            without the bloat.
          </p>
        </AnimateIn>

        <AnimateIn variants={fadeUp}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#cta"
              className="rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
            >
              Start for free
            </Link>
            <Link
              href="#features"
              className="rounded-full border border-gray-200 bg-white px-8 py-3.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              See how it works
            </Link>
          </div>
        </AnimateIn>
      </StaggerGroup>
    </section>
  );
}
