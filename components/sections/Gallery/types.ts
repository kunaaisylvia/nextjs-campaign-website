export interface GalleryImage {
  id: number;
  title: string;
  category: string;
  image: string;
  location: string;
}

export interface GalleryData {
  badge: string;
  title: string;
  description: string;
  images: GalleryImage[];
}