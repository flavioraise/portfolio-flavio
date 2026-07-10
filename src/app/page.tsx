import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="relative flex-1">
        <Hero />
        <Marquee />
        <Projects />
        {/* mirror of the footer bloom so the glow continues across the seam */}
        <div className="glow-radial-up pointer-events-none absolute inset-x-0 bottom-0 h-[340px]" />
      </main>
      <Footer />
    </>
  );
}
