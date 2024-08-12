import { MoveRight } from "lucide-react";
import { Project } from "./misc/project";
import { Button } from "./ui/button";

export function Work() {
  return (
    <section className="pt-10 mx-6" id="workSection">
      <h2 className="text-3xl mb-5">My Work</h2>

      <div className="grid gap-4 md:grid-cols-3 mb-4">
        {PROJECTS.map((project) => {
          return <Project key={project.title} project={project} />;
        })}
      </div>

      {/* See more projects button */}
      <Button
        variant="link"
        className="group flex-1 min-h-16 justify-start pl-0 transition-all duration-300 hover:no-underline"
      >
        See more projects{" "}
        <MoveRight
          strokeWidth={1.5}
          className="ml-2 transition-all ease-in-out duration-200 group-hover:translate-x-3"
        />{" "}
      </Button>
    </section>
  );
}

const PROJECTS = [
  {
    title: "Radiata Web",
    previewUrl: "https://i.imgur.com/1a2CmuY.jpeg",
    projectUrl: "/projects/radiata-web",
  },
  {
    title: "Ryandey.xyz",
    previewUrl: "https://i.imgur.com/1a2CmuY.jpeg",
    projectUrl: "/projects/radiata-web",
  },
  {
    title: "Jass ATM",
    previewUrl: "https://i.imgur.com/1a2CmuY.jpeg",
    projectUrl: "/projects/radiata-web",
  },
];
