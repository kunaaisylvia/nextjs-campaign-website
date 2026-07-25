import NewsCard from "./NewsCard";
import { news } from "./newsData";

export default function NewsSection() {
  return (
    <section
      id="news"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#C7A65B]">
            {news.badge}
          </p>

          <h2 className="text-5xl font-bold text-[#0B3D2E] md:text-6xl">
            {news.title}
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            {news.description}
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {news.articles.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
            />
          ))}
        </div>

      </div>
    </section>
  );
}