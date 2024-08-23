import { ProjectProps } from "../types";
import { Project } from "./misc/project";
import AllProjects from "../assets/projects.json";

export function Work() {
  return (
    <section className="mx-6 my-10 py-5" id="my-work">
      <h2 className="text-3xl mb-5">My Work</h2>

      <div className="grid gap-4 md:grid-cols-3">
        {/* Limit # of projects shown to 3 */}
        {AllProjects.slice(0, 3).map((project: ProjectProps) => {
          return <Project key={project.title} project={project} />;
        })}
      </div>
    </section>
  );
}
