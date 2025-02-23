import { UserRound } from "lucide-react";
import React from "react";

export default function About() {
  return (
    <section
      id="#about"
      className="px-8 py-16 sm:px-16 sm:py-16 lg:px-36 lg:py-28 border-b border-input"
    >
      {/* Section Label */}
      <div className="flex flex-row gap-2 justify-center items-center py-2 text-muted-foreground">
        <UserRound size={16} />
        <p className="text-sm">About me</p>
      </div>

      {/* Heading */}
      <h2 className="text-6xl mb-16 text-center">
        A little bit about <span className="text-primary">who I am</span>
      </h2>

      {/* Timeline Steps */}
      <div className="hidden md:block relative mb-8">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-input transform -translate-y-1/2 z-0" />
        <div className="relative flex justify-around px-8 gap-58">
          <div className="w-4 h-4 rounded-none bg-primary relative z-10" />
          <div className="w-4 h-4 rounded-none bg-primary relative z-10" />
          <div className="w-4 h-4 rounded-none bg-primary relative z-10" />
        </div>
      </div>

      {/* Card Grid */}
      <div className="grid md:text-center md:grid-cols-3 gap-12 md:gap-16 lg:gap-24 xl:gap-42 ">
        <div>
          <h3 className="text-4xl italic mb-4 md:text-center">Yesterday</h3>
          <p className="text-muted-foreground">
            I discovered my passion for programming through my early experiences
            with HTML and CSS. During high school, I worked as a freelance
            graphic designer, which has given me a deep appreciation for
            exceptional design.
          </p>
        </div>
        <div>
          <h3 className="text-4xl italic mb-4 md:text-center">Today</h3>
          <p className="text-muted-foreground">
            I discovered my passion for programming through my early experiences
            with HTML and CSS. During high school, I worked as a freelance
            graphic designer, which has given me a deep appreciation for
            exceptional design.
          </p>
        </div>
        <div>
          <h3 className="text-4xl italic mb-4 md:text-center">Tomorrow</h3>
          <p className="text-muted-foreground">
            I discovered my passion for programming through my early experiences
            with HTML and CSS. During high school, I worked as a freelance
            graphic designer, which has given me a deep appreciation for
            exceptional design.
          </p>
        </div>
      </div>
    </section>
  );
}
