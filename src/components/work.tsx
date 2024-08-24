import { ProjectProps } from "../types";
import { Project } from "./misc/project";
import AllProjects from "../assets/projects.json";
import { ArrowRightIcon } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export function Work() {
  return (
    <section className="mx-6 my-10 py-5" id="my-work">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-3xl">My Work</h2>
        <HashLink
          to="/projects#"
          className="flex flex-row gap-1 items-center group"
        >
          <p className="text-sm text-muted-foreground transition-all ease-in-out duration-300 group-hover:text-white">
            All Projects
          </p>
          <ArrowRightIcon
            size={18}
            color="var(--muted-foreground)"
            strokeWidth={1.5}
            className="transition-all ease-in-out duration-300 group-hover:stroke-white"
          />
        </HashLink>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {/* Limit # of projects shown to 3 */}
        {AllProjects.slice(0, 3).map((project: ProjectProps) => {
          return <Project key={project.title} project={project} />;
        })}
      </div>
    </section>
  );
}
