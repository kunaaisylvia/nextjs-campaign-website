import Image from "next/image";
import { MapPin } from "lucide-react";

import { GalleryImage } from "./types";

interface GalleryCardProps {
  image: GalleryImage;
}

export default function GalleryCard({ image }: GalleryCardProps) {
  return (
    <div className="group overflow-hidden rounded-[2rem] bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-80 overflow-hidden">
        <Image
          src={image.image}
          alt={image.title}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Category */}
        <div className="absolute left-5 top-5 rounded-full bg-[#C7A65B] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
          {image.category}
        </div>
      </div>

      <div className="space-y-3 p-6">
        <h3 className="text-2xl font-bold text-[#0B3D2E]">
          {image.title}
        </h3>

        <div className="flex items-center gap-2 text-gray-500">
          <MapPin size={18} />
          <span>{image.location}</span>
        </div>
      </div>
    </div>
  );
}