import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import VisionSection from "@/components/sections/Vision/VisionSection";
import ManifestoSection from "@/components/sections/Manifesto/ManifestoSection";
import RecordOfImpactSection from "@/components/sections/RecordOfImpact/RecordOfImpactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <VisionSection />
      <ManifestoSection />
      <RecordOfImpactSection />
      
    </>
  );
}