import { Job } from "./job"
import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const Experience = () => (
  <>
    <section className="text-center mb-[10rem]">
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

      <motion.div
        className="flex flex-col gap-2 mt-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Accordion
          type="single"
          className="border border-white-a08 rounded-xl"
          collapsible
        >
          {EXPERIENCE.map((exp) => {
            return (
              <AccordionItem
                key={exp.company}
                value={exp.company}
                className="py-2 px-8"
              >
                <AccordionTrigger>
                  <div className="flex items-start">
                    {/* Title & Timeline */}
                    <div className="text-start min-w">
                      <span className="text-white-a038 text-sm"></span>
                      <h3 className="text-lg">
                        {exp.title} &#8212; {exp.company}
                      </h3>
                      <p className="text-md text-grey">
                        {exp.startDate} - {exp.endDate}
                      </p>

                      {/* Skill Tags */}
                      <div className="flex flex-wrap gap-2 my-4 md:mb-0">
                        {exp.skills.map((skill) => (
                          <div
                            key={skill}
                            className="px-3 py-1 rounded-full bg-gradient-to-br from-primaryLight to-primary text-xs md:text-sm"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-start">
                  <ul>
                    {exp.description.map((descItem) => (
                      <li key={descItem[0]}>{descItem}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </motion.div>
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
    description: [
      "- Use React and Node.js to build front-end components for GuideWell Enterprise Data Services' Ingestion Framework.",
      "- Collaborate with back-end team by integrating elegant and functional interfaces for new platform features according to the Agile methodology.",
    ],
  },
  {
    company: "Radiata Web",
    title: "Freelance Web Developer",
    startDate: "Apr. 2023",
    endDate: "Present",
    skills: ["Next.js", "React", "AWS"],
    description: [
      "- Conceptualize and develop beautiful and efficient websites for clients following a mobile-first strategy, with an emphasis on accessibility.",
      "- Utilize JavaScript frameworks/libraries like Next.js and React.js to build full-stack web applications.",
      "- Leverage PostgreSQL to handle databases for applications requiring data and information storage.",
      "- Provide hosting services for built applications via Amazon Web Services (AWS Amplify & RDS).",
    ],
  },
  {
    company: "University of North Florida",
    title: "Webmaster",
    startDate: "Feb. 2022",
    endDate: "May 2023",
    skills: ["HTML/CSS", "CMS"],
    description: [
      "- Handled all website content updates and development, including data arrangement and content flow, across several business units.",
      "- Supported each unit’s web presence by designing, conceptualizing, and assembling online content.",
      "- Successfully redesigned and deployed the entire Undergraduate Studies department to Cascade CMS, building and optimizing 30+ legacy pages and merging excess information into sensible sections to minimize technical debt.",
    ],
  },
  {
    company: "Savage Labs",
    title: "Frontend Engineer",
    startDate: "Apr. 2019",
    endDate: "Jun. 2021",
    skills: ["Next.js", "React"],
    description: [
      "- Employed React.js and Next.js to build a 10+ page software marketplace, which grew to 150+ registered users and supported over 5000 unique downloads.",
      "- Built 30+ interface mockups in Figma for multiple web applications to drive user interaction and retention through accessible design.",
    ],
  },
]
