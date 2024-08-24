import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ProjectProps } from "../../types";

interface ProjectModel {
  project: ProjectProps;
}

export function Project(props: ProjectModel) {
  const { title, year, previewUrl, projectUrl } = props.project;

  return (
    <a href={projectUrl} target="_blank">
      {/* Card */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className={`min-h-56 h-full rounded-lg transition-shadow duration-300 hover:shadow-xl bg-cover bg-center md:min-h-64`}
        style={{
          backgroundImage: `url(${previewUrl})`,
        }}
      >
        {/* Card container */}
        <div className="p-4 h-full flex flex-col justify-between">
          {/* <img src={previewUrl} className="object-cover rounded-lg" /> */}

          {/* Topside */}
          <div className="flex flex-row justify-between items-center">
            <p className="text-sm">{year}</p>
            <ArrowUpRight />
          </div>

          {/* Title */}
          <p className="work-card-title text-xl">{title}</p>
        </div>
      </motion.div>
    </a>
  );
}
