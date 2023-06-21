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
                key={exp.id}
                value={exp.id.toString()}
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
                    <li>{exp.description}</li>
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
    id: 1,
    company: "Florida Blue",
    title: "UI/UX Development Intern III",
    startDate: "May 2023",
    endDate: "Present",
    skills: ["UI/UX", "React.js", "Node.js", "MongoDB", "REST API"],
    description: [
      "I build wireframes, prototype, and deliver reusable and thoughtfully designed React.js/TypeScript components for the Data Ingestion Platform. This involves collaboration with PMs, backend engineers and QA testers to match their functionality to a responsive front-end. I also write statements to fetch JSON or CSV data from multiple sources, including a REST API and MongoDB store.",
    ],
  },
  {
    id: 2,
    company: "Radiata Web",
    title: "Freelance Frontend/UX Engineer",
    startDate: "Apr. 2023",
    endDate: "Present",
    skills: ["Next.js", "React.js", "TypeScript", "PostgreSQL", "Figma"],
    description: [
      "I create accessible and elegant web experiences for small businesses to establish or enhance their online presence. I use React.js for the front-end and Next.js with PostgreSQL or MongoDB for full-stack applications requiring a database and REST API. All projects are built with TypeScript and self-hosted for clients, utilizing AWS and automated CI/CD environments.",
    ],
  },
  {
    id: 3,
    company: "University of North Florida",
    title: "Webmaster",
    startDate: "Feb. 2022",
    endDate: "May 2023",
    skills: ["UI/UX", "HTML5", "CSS3", "MongoDB", "Project Management"],
    description: [
      "I managed the migration of 50+ individual pages across three departments to a new CMS platform, taking inspiration from the old content and rebuilding them new using modern HTML/CSS standards to meet ADA accessibility requirements. Data fetched from a mixture of MongoDB and PostgreSQL databases. I used Python scripts to automate tasks related to the file system and data manipulation.",
    ],
  },
  {
    id: 4,
    company: "University of North Florida",
    title: "IT Technician",
    startDate: "Jul. 2021",
    endDate: "Feb. 2022",
    skills: ["Python", "Adobe XD", "Windows Server", "Mac"],
    description: [
      "I collaborated with leadership to design effective materials for campus marketing, faculty initiatives, and video projects. Introduced automation to tasks related to word processing and equipment rentals using Python. I handled flashing operating systems and configuring Microsoft Active Directory on university devices.",
    ],
  },
  {
    id: 5,
    company: "Savage Labs",
    title: "Frontend Engineer",
    startDate: "Apr. 2019",
    endDate: "Jun. 2021",
    skills: ["UI/UX", "Next.js", "React.js", "Figma"],
    description: [
      "I collaborated with backend engineers and directly with company leadership to build a 1st-party software marketplace using React.js and Next.js. I managed the implementation process end-to-end, starting with wireframes and prototypes in Figma, to the deployment through our automated CI/CD production environment.",
    ],
  },
]
