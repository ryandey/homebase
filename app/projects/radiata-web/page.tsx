import Hero from "@/components/projects/hero";
import React from "react";

export default function Page() {
  return (
    <div className="mt-14">
      <Hero
        heading="Radiata Web"
        subtitle="Development In Progress"
        liveUrl="https://radiataweb.com/"
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
