import { LucideIcon } from "lucide-react";

interface ImpactCardProps {
  icon: LucideIcon;
  value: string;
  title: string;
}

export default function ImpactCard({
  icon: Icon,
  value,
  title,
}: ImpactCardProps) {
  return (
    <div className="group rounded-3xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B3D2E]/10 text-[#C7A65B] transition-all duration-300 group-hover:bg-[#0B3D2E] group-hover:text-white">
        <Icon size={30} />
      </div>

      <h3 className="mb-2 text-5xl font-bold text-[#0B3D2E]">
        {value}
      </h3>

      <p className="text-lg font-medium text-gray-700">
        {title}
      </p>
    </div>
  );
}