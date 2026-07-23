import { LucideIcon } from "lucide-react";

interface ManifestoCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  commitments: string[];
}

export default function ManifestoCard({
  icon: Icon,
  title,
  subtitle,
  commitments,
}: ManifestoCardProps) {
  return (
    <div className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B3D2E]/10 text-[#C7A65B] transition-all duration-300 group-hover:bg-[#0B3D2E] group-hover:text-white">
        <Icon size={30} />
      </div>

      <h3 className="mb-2 text-2xl font-bold text-[#0B3D2E]">
        {title}
      </h3>

      <p className="mb-6 text-sm font-semibold uppercase tracking-wide text-[#C7A65B]">
        {subtitle}
      </p>

      <ul className="space-y-3">
        {commitments.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-gray-600"
          >
            <span className="mt-1 text-[#0B3D2E]">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}