import GalleryCard from "./GalleryCard";
import { gallery } from "./galleryData";

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="bg-[#F8F6F1] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#C7A65B]">
            {gallery.badge}
          </p>

          <h2 className="text-5xl font-bold text-[#0B3D2E] md:text-6xl">
            {gallery.title}
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            {gallery.description}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {gallery.images.map((image) => (
            <GalleryCard
              key={image.id}
              image={image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}