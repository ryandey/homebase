import { Button } from "@/components/ui/button";
import React from "react";

export default function Hero() {
  return (
    <section className="py-48 px-4 border-y border-input my-4">
      <div className="h-full flex flex-col items-center justify-center text-center space-y-8">
        <h1 className="text-6xl md:text-7xl lg:text-8xl">
          Nice to meet you,
          <br /> I'm <span className="text-primary">Ryan Dey</span>.
        </h1>
        <p>
          I’m a full-stack software engineer specializing in crafting beautiful
          React interfaces.
        </p>
        <div className="mt-8 space-x-4">
          <Button variant="default">See my work</Button>
          <Button variant="outline">Get my resume</Button>
        </div>
      </div>
    </section>
  );
}
