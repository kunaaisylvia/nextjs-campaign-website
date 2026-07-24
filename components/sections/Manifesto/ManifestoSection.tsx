"use client";

import { useState } from "react";
import {
  HeartPulse,
  GraduationCap,
  Droplets,
  Users,
  Building2,
  Briefcase,
  Sprout,
  Landmark,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { manifesto } from "./manifestoData";

const iconMap = {
  heart: HeartPulse,
  education: GraduationCap,
  water: Droplets,
  people: Users,
  infrastructure: Building2,
  jobs: Briefcase,
  environment: Sprout,
  governance: Landmark,
};

export default function ManifestoSection() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (title: string) => {
    setExpandedCard((current) =>
      current === title ? null : title
    );
  };

  return (
    <section
      id="manifesto"
      className="bg-[#F8F6F1] py-28 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto mb-24 max-w-4xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#C7A65B]">
            {manifesto.badge}
          </p>

          <h2 className="text-5xl font-bold text-[#0B3D2E] md:text-6xl">
            {manifesto.title}
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            {manifesto.description}
          </p>

        </div>

        {/* Groups */}

        <div className="space-y-20">

          {manifesto.groups.map((group) => (

            <div
              key={group.title}
              className="rounded-[2rem] border border-[#E8E2D6] bg-white p-10 shadow-lg md:p-14"
            >

              {/* Group Title */}

              <div className="mb-14 text-center">

                <h3 className="text-3xl font-bold text-[#0B3D2E]">
                  {group.title}
                </h3>

                <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#C7A65B]" />

                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                  {group.description}
                </p>

              </div>

              {/* Cards */}

              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                {group.pillars.map((pillar) => {

                  const Icon = iconMap[pillar.icon];

                  const expanded =
                    expandedCard === pillar.title;

                  return (

                    <div
                      key={pillar.title}
                      className={`group rounded-3xl border bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                        expanded
                          ? "border-[#0B3D2E] shadow-2xl"
                          : "border-[#E8E2D6] shadow-sm"
                      }`}
                    >

                      {/* Icon */}

                      <div
                        className={`mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-2xl transition-all duration-300 ${
                          expanded
                            ? "bg-[#0B3D2E] text-white"
                            : "bg-[#0B3D2E]/10 text-[#C7A65B] group-hover:bg-[#0B3D2E] group-hover:text-white"
                        }`}
                      >
                        <Icon
                          size={34}
                          strokeWidth={2}
                        />
                      </div>

                      {/* Title */}

                      <h4 className="text-2xl font-bold text-[#0B3D2E]">
                        {pillar.title}
                      </h4>

                      {/* Subtitle */}

                      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#C7A65B]">
                        {pillar.subtitle}
                      </p>

                      {/* Commitments */}

                      <ul className="mt-6 space-y-3">

                        {pillar.commitments.map(
                          (item) => (

                            <li
                              key={item}
                              className="flex items-start gap-3 text-[15px] leading-7 text-gray-600"
                            >

                              <span className="mt-1 text-[#0B3D2E]">
                                •
                              </span>

                              <span>{item}</span>

                            </li>

                          )
                        )}

                      </ul>
                                            {/* Expandable Content */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          expanded
                            ? "mt-8 max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="border-t border-[#E8E2D6] pt-8">
                          <h5 className="mb-4 text-lg font-bold text-[#0B3D2E]">
                            Why It Matters
                          </h5>

                          <p className="leading-8 text-gray-600">
                            {pillar.summary}
                          </p>
                        </div>
                      </div>

                      {/* Learn More Button */}
                      <button
                        onClick={() => toggleCard(pillar.title)}
                        className="mt-8 inline-flex items-center gap-2 font-semibold text-[#0B3D2E] transition-all duration-300 hover:text-[#C7A65B]"
                      >
                        {expanded ? (
                          <>
                            Show Less
                            <ChevronUp size={18} />
                          </>
                        ) : (
                          <>
                            Learn More
                            <ChevronDown size={18} />
                          </>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}