import { ProjectProps } from "../types"
import { Project } from "./misc/project"
import AllProjects from "../assets/projects.json"
import { ArrowRightIcon } from "lucide-react"
import { HashLink } from "react-router-hash-link"

export function Work() {
  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY
    const yOffset = -150
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" })
  }

  return (
    <section className="my-10 py-5" id="my-work">
      <h2 className="text-3xl mb-5">My Work</h2>

      <div className="grid gap-4 mb-6 md:grid-cols-3">
        {/* Limit # of projects shown to 3 */}
        {AllProjects.slice(0, 3).map((project: ProjectProps) => {
          return <Project key={project.title} project={project} />
        })}
      </div>

      <HashLink
        to="/projects#"
        scroll={scrollWithOffset}
        className="flex flex-row gap-1 items-center group py-1"
      >
        <p className="text-sm text-muted-foreground transition-all ease-in-out duration-300 group-hover:text-white">
          View all projects
        </p>
        <ArrowRightIcon
          size={18}
          color="var(--muted-foreground)"
          strokeWidth={1.5}
          className="transition-all ease-in-out duration-300 group-hover:stroke-white"
        />
      </HashLink>
    </section>
  )
}
