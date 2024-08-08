import { Hero } from "@/components/hero";
import { About } from "./about";
import { Experience } from "./experience";
import WorkCarousel from "./misc/workCarousel";
import { Work } from "./work";
import Contact from "./contact";

export default function Content() {
  return (
    // mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0
    <main className="mx-auto min-h-screen max-w-screen-xl">
      <Hero />
      <About />
      <Experience />
      <Work />
      <WorkCarousel />
      <Contact />
    </main>
  );
}
