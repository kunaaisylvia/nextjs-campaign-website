import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import VisionSection from "@/components/sections/Vision/VisionSection";
import ManifestoSection from "@/components/sections/Manifesto/ManifestoSection";
import RecordOfImpactSection from "@/components/sections/RecordOfImpact/RecordOfImpactSection";
import GallerySection from "@/components/sections/Gallery/GallerySection";
import NewsSection from "@/components/sections/News/NewsSection";
import ContactSection from "@/components/sections/Contact/ContactSection";
import Footer from "@/components/sections/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <VisionSection />
      <ManifestoSection />
      <RecordOfImpactSection />
      <GallerySection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </>
  );
}