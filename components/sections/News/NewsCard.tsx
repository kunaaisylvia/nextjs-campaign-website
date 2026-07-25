import Image from "next/image";
import { ArrowRight, CalendarDays } from "lucide-react";

import { NewsArticle } from "./types";

interface NewsCardProps {
  article: NewsArticle;
}

export default function NewsCard({ article }: NewsCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl">

      <div className="relative h-64 overflow-hidden">

        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute left-5 top-5 rounded-full bg-[#C7A65B] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
          {article.category}
        </div>

      </div>

      <div className="p-8">

        <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <CalendarDays size={16} />
          {article.date}
        </div>

        <h3 className="mb-4 text-2xl font-bold text-[#0B3D2E]">
          {article.title}
        </h3>

        <p className="mb-6 leading-7 text-gray-600">
          {article.excerpt}
        </p>

        <button className="flex items-center gap-2 font-semibold text-[#0B3D2E] transition hover:text-[#C7A65B]">

          Read More

          <ArrowRight
            size={18}
            className="transition group-hover:translate-x-1"
          />

        </button>

      </div>
    </article>
  );
}