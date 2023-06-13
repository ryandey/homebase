import { Project } from "./project"
import { motion } from "framer-motion"

import Jass from "@/assets/images/projects/jass.webp"
import Radiata from "@/assets/images/projects/radiata.webp"
import RyanDey from "@/assets/images/projects/ryandey.webp"
import SavageLabs from "@/assets/images/projects/savagelabs-1.webp"
import Dontra from "@/assets/images/projects/dontra.webp"

export const Projects = () => {
  return (
    <section id="projects" className="text-center mb-[10rem]">
      <motion.h2
        className="text-2xl leading-[4rem] pb-1 text-transparent bg-clip-text bg-gradient-to-br from-white to-grey-a038 my-3 md:text-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        Work
      </motion.h2>

      <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => {
          return (
            <motion.div
              className="text-2xl my-3 md:text-3xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Project
                name={project.name}
                description={project.description}
                link={project.link}
                source={project.source}
                image={project.image}
                imageAlt={project.imageAlt}
              />
            </motion.div>
          )
        })}
      </div>
      <div id="experience"></div>
    </section>
  )
}

const PROJECTS = [
  {
    name: "Jass ATM",
    description: "Company website",
    link: "https://jassatm.com/",
    source: "https://github.com/Radiata-Web/jass-atm",
    image: Jass,
    imageAlt: "jass atm logo",
  },
  {
    name: "Radiata Web",
    description: "Company website",
    link: "https://radiataweb.com/",
    source: "https://github.com/Radiata-Web/coming-soon",
    image: Radiata,
    imageAlt: "radiata logo",
  },
  {
    name: "Dontra CRM",
    description: "Capstone project",
    link: "",
    source: "https://github.com/WebadriEP/LWVFL",
    image: Dontra,
    imageAlt: "dontra crm logo",
  },
  {
    name: "Ryan Dey",
    description: "Personal website",
    link: "https://ryandey.xyz",
    source: "",
    image: RyanDey,
    imageAlt: "ryan dey logo",
  },
  {
    name: "Savage Labs",
    description: "Company website",
    link: "https://savagelabs-web.vercel.app/",
    source: "https://github.com/ryandey/savagelabs-web",
    image: SavageLabs,
    imageAlt: "savage labs logo",
  },
]
