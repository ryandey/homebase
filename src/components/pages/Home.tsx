import { Hero } from "../hero"
import { About } from "../about"
import { Experience } from "../experience"
import { Work } from "../work"
import Contact from "../contact"

export default function Home() {
  return (
    <main className="mx-auto mt-32 px-6 min-h-screen max-w-screen-lg">
      <Hero />
      <About />
      <Experience />
      <Work />
      <Contact />
    </main>
  )
}
