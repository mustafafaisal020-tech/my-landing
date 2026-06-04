import AnimateIn from "@/components/ui/AnimateIn";
import StaggerGroup from "@/components/ui/StaggerGroup";
import { scaleIn } from "@/lib/motion";

const features = [
  {
    title: "Lightning fast",
    description: "Built on Next.js 14 with React Server Components for the fastest possible load times.",
    icon: "⚡",
  },
  {
    title: "Fully responsive",
    description: "Looks great on every screen size, from mobile to widescreen desktop.",
    icon: "📱",
  },
  {
    title: "Easy to customize",
    description: "Clean component structure with Tailwind CSS makes it simple to make it your own.",
    icon: "🎨",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white">
      <div className="container-max section-padding">
        <AnimateIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything you need
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            A solid foundation so you can focus on what matters — your product.
          </p>
        </AnimateIn>

        <StaggerGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, icon }) => (
            <AnimateIn key={title} variants={scaleIn}>
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8 hover:shadow-md transition-shadow h-full">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            </AnimateIn>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
