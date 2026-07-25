export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
}

export interface NewsData {
  badge: string;
  title: string;
  description: string;
  articles: NewsArticle[];
}