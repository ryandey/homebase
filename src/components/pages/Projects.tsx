import { ProjectProps } from "../../types";
import { Project } from "../misc/project";
import AllProjects from "../../assets/projects.json";

export default function Projects() {
  return (
    <main className="mx-auto mt-32 max-w-screen-lg">
      <h1 className="text-3xl mb-6">My Work</h1>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Map ALL projects */}
        {AllProjects.map((project: ProjectProps) => {
          return <Project key={project.title} project={project} />;
        })}
      </div>
    </main>
  );
}
