import ManifestoCard from "./ManifestoCard";
import { manifesto } from "./manifestoData";

export default function ManifestoSection() {
  return (
    <section
      id="manifesto"
      className="scroll-mt-24 bg-[#F8F6F1] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C7A65B]">
            {manifesto.badge}
          </p>

          <h2 className="text-5xl font-bold text-[#0B3D2E]">
            {manifesto.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            {manifesto.description}
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {manifesto.pillars.map((pillar) => (
            <ManifestoCard
              key={pillar.title}
              icon={pillar.icon}
              title={pillar.title}
              subtitle={pillar.subtitle}
              commitments={pillar.commitments}
            />
          ))}
        </div>

      </div>
    </section>
  );
}