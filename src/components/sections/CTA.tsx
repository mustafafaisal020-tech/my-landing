import AnimateIn from "@/components/ui/AnimateIn";
import StaggerGroup from "@/components/ui/StaggerGroup";

export default function CTA() {
  return (
    <section id="cta" className="bg-gray-900">
      <StaggerGroup className="container-max section-padding text-center">
        <AnimateIn>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
            Ready to get started?
          </h2>
        </AnimateIn>

        <AnimateIn>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Join thousands of teams already using our platform. No credit card required.
          </p>
        </AnimateIn>

        <AnimateIn>
          <a
            href="#"
            className="inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors"
          >
            Create your free account
          </a>
        </AnimateIn>
      </StaggerGroup>
    </section>
  );
}
