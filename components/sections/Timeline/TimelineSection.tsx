import { timeline } from "./timelineData";
import TimelineNode from "./TimelineNode";

export default function TimelineSection() {
  return (
    <section
      id="journey"
      className="bg-[#F8F6F1] py-28"
    >
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-20 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C7A65B]">
            Leadership Journey
          </p>

          <h2 className="text-5xl font-bold text-[#0B3D2E]">
            A Lifetime of Service
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Decades of public service, leadership, and dedication to improving
            the lives of the people through effective governance and visionary
            leadership.
          </p>
        </div>

        <div className="relative">

          <div className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 rounded-full bg-[#C7A65B]/40 lg:block" />

          <div className="space-y-16">
            {timeline.map((item, index) => (
              <TimelineNode
                key={item.year}
                item={item}
                index={index}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}