import { Hero } from "../hero";
import { About } from "../about";
import { Experience } from "../experience";
import { Work } from "../work";
import Contact from "../contact";
import Footer from "../footer";

export default function Home() {
  return (
    <main className="mx-auto mt-32 min-h-screen max-w-screen-lg">
      <Hero />
      <About />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
