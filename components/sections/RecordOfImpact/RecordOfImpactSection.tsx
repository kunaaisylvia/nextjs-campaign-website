import ImpactCard from "./ImpactCard";
import { impact } from "./impactData";

export default function RecordOfImpactSection() {
  return (
    <section
      id="impact"
      className="scroll-mt-24 bg-[#F8F6F1] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C7A65B]">
            {impact.badge}
          </p>

          <h2 className="text-5xl font-bold text-[#0B3D2E]">
            {impact.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            {impact.description}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {impact.items.map((item) => (
            <ImpactCard
              key={item.title}
              icon={item.icon}
              value={item.value}
              title={item.title}
            />
          ))}
        </div>

      </div>
    </section>
  );
}