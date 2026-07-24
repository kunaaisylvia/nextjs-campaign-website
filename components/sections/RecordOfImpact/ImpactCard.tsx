"use client";

import {
  Users,
  Landmark,
  Shield,
  Briefcase,
} from "lucide-react";

import { ImpactStat } from "./types";

const iconMap = {
  users: Users,
  landmark: Landmark,
  shield: Shield,
  briefcase: Briefcase,
};

interface ImpactCardProps {
  stat: ImpactStat;
}

export default function ImpactCard({
  stat,
}: ImpactCardProps) {
  const Icon = iconMap[stat.icon];

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-[#E8E2D6]
        bg-white
        px-10
        py-14
        shadow-lg
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-[#C7A65B]
        hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]
      "
    >
      {/* Gold top accent */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-1
          origin-left
          scale-x-0
          bg-[#C7A65B]
          transition-transform
          duration-500
          group-hover:scale-x-100
        "
      />

      {/* Icon */}
      <div className="mb-8 flex justify-center">
        <div
          className="
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-3xl
            bg-[#0B3D2E]/10
            text-[#C7A65B]
            transition-all
            duration-500
            group-hover:bg-[#0B3D2E]
            group-hover:text-white
          "
        >
          <Icon size={42} strokeWidth={1.8} />
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto mb-8 h-[2px] w-14 rounded-full bg-[#C7A65B]" />

      {/* Number */}
      <h3 className="text-center text-6xl font-bold tracking-tight text-[#0B3D2E]">
        {stat.value}
      </h3>

      {/* Label */}
      <p className="mt-4 text-center text-xl font-semibold text-[#0B3D2E]">
        {stat.label}
      </p>

      {/* Description */}
      <p className="mt-6 text-center leading-8 text-gray-600">
        {stat.description}
      </p>
    </div>
  );
}