import { LucideIcon } from "lucide-react";

interface VisionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function VisionCard({
  icon: Icon,
  title,
  description,
}: VisionCardProps) {
  return (
    <div className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B3D2E]/10 text-[#C7A65B] transition-all duration-300 group-hover:bg-[#0B3D2E] group-hover:text-white">
        <Icon size={30} />
      </div>

      <h3 className="mb-4 text-2xl font-bold text-[#0B3D2E]">
        {title}
      </h3>

      <p className="leading-8 text-gray-600">
        {description}
      </p>
    </div>
  );
}