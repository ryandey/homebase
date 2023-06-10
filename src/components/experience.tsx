import { Job } from "./job"
import { motion } from "framer-motion"

export const Experience = () => (
  <>
    <section id="experience" className="text-center mb-[10rem]">
      <motion.h2
        className="text-2xl leading-[6rem] pb-1 text-transparent bg-clip-text bg-gradient-to-br from-white to-grey-a038 my-3 md:text-3xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        Experience
      </motion.h2>

      <div className="flex flex-col gap-2 mt-8">
        {EXPERIENCE.map((exp) => {
          return (
            <motion.div
              className="flex md:text-3xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Job
                key={exp.company}
                company={exp.company}
                title={exp.title}
                startDate={exp.startDate}
                endDate={exp.endDate}
                skills={exp.skills}
              />
            </motion.div>
          )
        })}
      </div>
    </section>
  </>
)

const EXPERIENCE = [
  {
    company: "Florida Blue",
    title: "Applications Developer Intern",
    startDate: "May 2023",
    endDate: "Present",
    skills: ["React", "Node", "HTML/CSS"],
  },
  {
    company: "Radiata Web",
    title: "Freelance Web Developer",
    startDate: "Apr. 2023",
    endDate: "Present",
    skills: ["Next.js", "React", "AWS"],
  },
  {
    company: "University of North Florida",
    title: "Webmaster",
    startDate: "Feb. 2022",
    endDate: "May 2023",
    skills: ["HTML/CSS", "CMS"],
  },
  {
    company: "Savage Labs",
    title: "Frontend Engineer",
    startDate: "Apr. 2019",
    endDate: "Jun. 2021",
    skills: ["Next.js", "React"],
  },
]
