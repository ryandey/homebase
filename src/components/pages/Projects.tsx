import { ProjectProps } from "../../types";
import { Project } from "../misc/project";
import AllProjects from "../../assets/projects.json";

export default function Projects() {
  return (
    <section className="mt-20 mx-6 my-10 py-5">
      <h1 className="text-3xl mb-6">My Work</h1>

      <div className="grid gap-4 md:grid-cols-3">
        {/* Map ALL projects */}
        {AllProjects.map((project: ProjectProps) => {
          return <Project key={project.title} project={project} />;
        })}
      </div>
    </section>
  );
}
