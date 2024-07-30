import "./App.css";
import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/ui/nav";
import { Experience } from "@/components/experience";

function App() {
  return (
    <>
      <Nav />
      <main className="bg-background mx-6">
        <Hero />
        <About />
        <Experience />
      </main>
    </>
  );
}

export default App;
