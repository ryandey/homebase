import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { ProjectProps } from "../../types"

interface ProjectModel {
  project: ProjectProps
}

export function Project(props: ProjectModel) {
  const { title, year, previewUrl, projectUrl, live } = props.project

  return live ? (
    <a href={projectUrl} target="_blank">
      {/* Card */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className={`min-h-56 h-full rounded-xl border border-bg transition-shadow duration-300 hover:shadow-xl bg-cover bg-center md:min-h-64`}
        style={{
          backgroundImage: `url(${previewUrl})`,
        }}
      >
        {/* Card container */}
        <div className="p-4 h-full flex flex-col justify-between">
          {/* Topside */}
          <div className="flex flex-row justify-end items-center">
            <ArrowUpRight color="var(--muted-foreground)" />
          </div>

          {/* Title */}
          <div>
            <p className="work-card-title text-xl">{title}</p>
            <p className="text-muted-foreground">{year}</p>
          </div>
        </div>
      </motion.div>
    </a>
  ) : (
    // Project is not live card
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={`min-h-56 h-full rounded-lg transition-shadow duration-300 hover:shadow-xl bg-cover bg-center md:min-h-64 hover:cursor-not-allowed`}
      style={{
        backgroundImage: `url(${previewUrl})`,
      }}
    >
      <div className="p-4 h-full flex flex-col justify-between">
        <div>
          <p className="work-card-title text-xl">{title}</p>
          <p className="text-muted-foreground">{year}</p>
        </div>
      </div>
    </motion.div>
  )
}
