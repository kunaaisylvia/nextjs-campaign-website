import { about } from "@/data/about";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#F8F6F1] py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">

        {/* Image Placeholder */}
        <div className="flex justify-center">
          <div className="flex h-[500px] w-[380px] items-center justify-center rounded-3xl border border-gray-200 bg-white shadow-xl">
            <span className="text-gray-400">
              Portrait Coming Soon
            </span>
          </div>
        </div>

        {/* Content */}
        <div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C7A65B]">
            {about.badge}
          </p>

          <h2 className="mb-8 text-5xl font-bold text-[#0B3D2E]">
            {about.title}
          </h2>

          <p className="mb-8 text-lg leading-8 text-gray-600">
            {about.description}
          </p>

          <ul className="mb-10 space-y-4">
            {about.highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-lg"
              >
                <span className="text-[#C7A65B]">✓</span>

                {item}
              </li>
            ))}
          </ul>

          <Button
            size="lg"
            className="bg-[#0B3D2E] hover:bg-[#14523d]"
          >
            {about.button}
          </Button>

        </div>

      </div>
    </section>
  );
}