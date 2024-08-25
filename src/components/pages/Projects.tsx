import { ProjectProps } from "../../types"
import { Project } from "../misc/project"
import AllProjects from "../../assets/projects.json"
import Contact from "../contact"

export default function Projects() {
  return (
    <main className="mx-auto px-6 mt-32 max-w-screen-lg">
      <h1 className="text-4xl mb-5 md:text-7xl">
        Work & <br />
        Projects
      </h1>
      <p className="text-muted-foreground text-xl mb-10">
        A collection of my personal and freelance web development work
      </p>

      <div className="grid gap-4 mb-10 md:grid-cols-3">
        {/* Map ALL projects */}
        {AllProjects.map((project: ProjectProps) => {
          return <Project key={project.title} project={project} />
        })}
      </div>

      <Contact />
    </main>
  )
}
