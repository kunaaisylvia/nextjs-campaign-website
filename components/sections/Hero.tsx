import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero/kajiado-hero.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D2E]/90 via-[#0B3D2E]/60 to-black/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.4em] text-[#C7A65B]">
          FOR A STRONGER KAJIADO
        </p>

        <h1 className="mb-6 text-6xl font-bold md:text-7xl">
          Katoo Ole Metito
        </h1>

        <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">
          Building opportunity, dignity, and prosperity for every family across
          Kajiado County.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">

          <a href="#vision">
            <Button
              size="lg"
              className="bg-[#C7A65B] px-8 py-6 text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#d8b86f] hover:shadow-xl"
            >
              Explore the Vision
            </Button>
          </a>

          <a href="#about">
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent px-8 py-6 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black hover:shadow-xl"
            >
              Meet Katoo
            </Button>
          </a>

        </div>
      </div>
    </section>
  );
}