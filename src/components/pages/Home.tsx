import { Hero } from "@/components/hero";
import { About } from "../about";
import { Experience } from "../experience";
import { Work } from "../work";
import Contact from "../contact";
import Footer from "../footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
