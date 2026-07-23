type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

interface TimelineNodeProps {
  item: TimelineItem;
  index: number;
}

export default function TimelineNode({
  item,
  index,
}: TimelineNodeProps) {
  const left = index % 2 === 0;

  return (
    <div
      className={`relative flex items-center ${
        left ? "lg:justify-start" : "lg:justify-end"
      }`}
    >
      <div className="absolute left-1/2 hidden h-5 w-5 -translate-x-1/2 rounded-full border-4 border-white bg-[#C7A65B] shadow lg:block" />

      <div className="w-full lg:w-[45%]">
        <div className="rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

          <span className="inline-block rounded-full bg-[#0B3D2E] px-4 py-2 text-sm font-semibold text-white">
            {item.year}
          </span>

          <h3 className="mt-5 text-2xl font-bold text-[#0B3D2E]">
            {item.title}
          </h3>

          <p className="mt-4 leading-8 text-gray-600">
            {item.description}
          </p>

        </div>
      </div>
    </div>
  );
}