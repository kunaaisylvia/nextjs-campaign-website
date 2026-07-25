import { NewsData } from "./types";

export const news: NewsData = {
  badge: "NEWS & UPDATES",

  title: "Latest Campaign News",

  description:
    "Stay informed with the latest announcements, community engagements, development initiatives, and campaign activities across Kajiado County.",

  articles: [
    {
      id: 1,
      title: "Meeting Community Leaders in Kajiado South",
      excerpt:
        "Engaging local leaders to discuss development priorities and strengthen partnerships for sustainable growth.",

      image: "/images/news/news-1.jpg",

      category: "Community",

      date: "22 July 2026",
    },

    {
      id: 2,
      title: "Youth Empowerment Forum Draws Hundreds",

      excerpt:
        "Young people gathered to discuss employment, entrepreneurship and skills development opportunities.",

      image: "/images/news/news-2.jpg",

      category: "Youth",

      date: "18 July 2026",
    },

    {
      id: 3,
      title: "Healthcare Improvement Initiative Announced",

      excerpt:
        "Plans unveiled to strengthen healthcare infrastructure and improve access to quality medical services.",

      image: "/images/news/news-3.jpg",

      category: "Healthcare",

      date: "10 July 2026",
    },
  ],
};