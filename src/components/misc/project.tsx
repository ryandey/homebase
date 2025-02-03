import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ProjectProps } from "../../types";
import { Badge } from "../ui/badge";

interface ProjectModel {
  project: ProjectProps;
}

export function Project(props: ProjectModel) {
  const { title, previewUrl, projectUrl, live, description, tags } =
    props.project;

  return live ? (
    <a href={projectUrl} target="_blank">
      {/* Card */}
      <motion.div
        whileHover={{ scale: 1.025 }}
        className={`rounded-xl border border-bg transition-shadow duration-300 hover:shadow-xl`}
      >
        {/* Card container */}
        <div className="p-4 flex justify-between">
          <div className="flex flex-col gap-6 items-center sm:flex-row">
            {/* Project preview image */}
            <img
              src={previewUrl}
              alt={title}
              width={125}
              height={125}
              className="hidden rounded-xl sm:block"
            />

            {/* Title */}
            <div>
              <p className="work-card-title text-lg sm:text-xl">{title}</p>
              <p className="text-muted-foreground">{description}</p>

              {/* Project tags -- mobile */}
              <div className="flex gap-2 mt-3 flex-wrap sm:hidden">
                {tags.slice(0, 4).map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Project tags */}
              <div className="hidden gap-2 mt-3 flex-wrap sm:flex">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="items-center hidden sm:flex">
            <ArrowUpRight color="var(--muted-foreground)" />
          </div>
        </div>
      </motion.div>
    </a>
  ) : (
    // Project is not live card
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={`min-h-56 h-full rounded-lg transition-shadow duration-300 hover:shadow-xl md:min-h-64 hover:cursor-not-allowed`}
    >
      <div className="p-4 h-full flex flex-col justify-between">
        <div>
          <p className="work-card-title text-xl">{title}</p>
        </div>
      </div>
    </motion.div>
  );
}
