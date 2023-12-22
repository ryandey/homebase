"use client"

import { Container } from "@/components/ui/container"
import { Hero, HeroTitle, HeroSubtitle } from "@/components/hero"

export default function Home() {
  return (
    <Container>
      <Hero>
        <HeroTitle>Ryan Dey</HeroTitle>
        <HeroSubtitle>JavaScript Developer</HeroSubtitle>
      </Hero>
    </Container>
  )
}
