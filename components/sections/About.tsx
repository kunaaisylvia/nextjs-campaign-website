import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { about } from "@/data/about";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#F8F6F1] py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Portrait */}
        <div className="flex justify-center">
          <div className="rounded-[2rem] border border-[#D4C29A]/40 bg-white p-3 shadow-2xl">
            <div className="relative h-[500px] w-[380px] overflow-hidden rounded-[1.5rem]">
              <Image
                src="/images/katoo-portrait.jpg"
                alt="Judah Katoo Ole Metito"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 380px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C7A65B]">
            {about.badge}
          </p>

          <h2 className="mb-6 text-5xl font-bold leading-tight text-[#0B3D2E]">
            {about.title}
          </h2>

          <p className="mb-8 text-lg leading-8 text-gray-600">
            {about.description}
          </p>

          <ul className="mb-10 space-y-5">
            {about.highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B3D2E] font-bold text-white">
                  ✓
                </span>

                <span className="text-lg font-medium text-[#1D1D1D]">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Leadership Journey Button */}
          <Link href="/leadership">
            <Button
              size="lg"
              className="group bg-[#0B3D2E] px-8 py-6 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#14523D] hover:shadow-xl"
            >
              <span className="flex items-center gap-2">
                Explore Leadership Journey
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}