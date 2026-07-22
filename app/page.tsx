import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TimelineSection from "@/components/sections/Timeline/TimelineSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TimelineSection />
    </>
  );
}