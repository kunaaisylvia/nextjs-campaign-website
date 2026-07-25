export interface GalleryItem {
  image: string;
  title: string;
  category: string;
  date: string;
}

export interface GalleryData {
  badge: string;
  title: string;
  description: string;
  images: GalleryItem[];
}