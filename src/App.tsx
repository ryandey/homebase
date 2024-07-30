import "./App.css";
import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/ui/nav";
import { Experience } from "@/components/experience";
import { Work } from "@/components/work";
import WorkCarousel from "@/components/misc/workCarousel";
import Contact from "@/components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <WorkCarousel />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
