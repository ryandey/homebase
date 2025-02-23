import About from "@/components/landing/about";
import Hero from "@/components/landing/hero";
import Projects from "@/components/landing/projects";
import Contact from "@/components/landing/contact";

export default function Home() {
  return (
    <main className="mt-14">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
