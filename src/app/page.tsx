"use client"

import { Container } from "@/components/ui/container"
import { Hero, HeroTitle, HeroSubtitle } from "@/components/hero"
import { Frameworks } from "@/components/frameworks"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"

export default function Home() {
  return (
    <main className="scroll-mt-[100px]">
      <Container>
        <Hero>
          <HeroTitle>Hey there, I'm Ryan</HeroTitle>
          <HeroSubtitle>
            I am a UI/UX Engineer based out of Jacksonville, FL with{" "}
            <br className="hidden md:block" />
            experience in several leading web technologies.
          </HeroSubtitle>
          <Frameworks logoSize={40} />
        </Hero>

        <Projects />

        <Experience />
      </Container>
    </main>
  )
}
