import Hero from "@/components/projects/hero";
import React from "react";

export default function Page() {
  return (
    <div className="mt-14">
      <Hero
        heading="My Personal Portfolio"
        subtitle="Completed: February 2025 (V3)"
        liveUrl="https://ryanpdey.com/"
        sourceUrl="https://github.com/ryandey/homebase/"
      />

      {/* Page content */}
      <section className="flex flex-col justify-center items-center p-16 h-190">
        <p className="font-instrumentSerif text-4xl">
          Project details coming soon.
        </p>
      </section>
    </div>
  );
}
