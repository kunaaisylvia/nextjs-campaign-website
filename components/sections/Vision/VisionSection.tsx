import VisionCard from "./VisionCard";
import { vision } from "./visionData";

export default function VisionSection() {
  return (
    <section
      id="vision"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C7A65B]">
            {vision.badge}
          </p>

          <h2 className="text-5xl font-bold text-[#0B3D2E]">
            {vision.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            {vision.description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {vision.pillars.map((pillar) => (
            <VisionCard
              key={pillar.title}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}