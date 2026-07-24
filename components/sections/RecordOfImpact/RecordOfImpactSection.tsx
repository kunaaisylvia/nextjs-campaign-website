import ImpactCard from "./ImpactCard";
import { impactData } from "./impactData";

export default function RecordOfImpactSection() {
  return (
    <section
      id="impact"
      className="scroll-mt-24 bg-[#F8F6F1] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-4xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#C7A65B]">
            {impactData.badge}
          </p>

          <h2 className="text-5xl font-bold leading-tight text-[#0B3D2E] md:text-6xl">
            {impactData.title}
          </h2>

          <div className="mx-auto mt-8 mb-10 h-[2px] w-24 rounded-full bg-[#C7A65B]" />

          <p className="mx-auto max-w-4xl text-lg leading-9 text-gray-600">
            {impactData.description}
          </p>

        </div>

        {/* Impact Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {impactData.stats.map((stat) => (
            <ImpactCard
              key={stat.label}
              stat={stat}
            />
          ))}
        </div>

      </div>
    </section>
  );
}