import { ArrowRightIcon } from "lucide-react";
import Job from "../components/misc/job";
import Resume from "@/assets/Ryan_Dey_Resume_RDXYZ_Aug-2024.pdf";

export const Experience = () => {
  return (
    <section className="flex flex-col my-10 mx-6 py-5" id="experience">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-3xl">My Work</h2>
        <a
          href={Resume}
          target="_blank"
          className="flex flex-row gap-1 items-center group"
        >
          <p className="text-sm text-muted-foreground transition-all ease-in-out duration-300 group-hover:text-white">
            See full resume
          </p>
          <ArrowRightIcon
            size={18}
            color="var(--muted-foreground)"
            strokeWidth={1.5}
            className="transition-all ease-in-out duration-300 group-hover:stroke-white"
          />
        </a>
      </div>

      {/* Jobs */}
      <div className="mb-4">
        {JOB_LIST.map((job) => {
          return <Job key={job.title} job={job} />;
        })}
      </div>
    </section>
  );
};

const JOB_LIST = [
  {
    company: "Florida Blue",
    title: "Associate IT Developer",
    started: "May 2023",
    ended: "Present",
    description:
      "Conceptualize and deliver React.js apps for data ingest platforms, including collaboration with project leads and UX engineers for rapid prototyping.",
    tags: ["JavaScript", "React.js", "Express.js", "PostgreSQL"],
    website: "https://floridablue.com",
  },
  {
    company: "Radiata Web",
    title: "Freelance Web Developer",
    started: "Apr. 2023",
    ended: "Present",
    description:
      "Guide clients through the process of building a bespoke web solution and provide hosting solutions through AWS with automated CI/CD pipelines that support future iterations.",
    tags: ["TypeScript", "React.js", "Next.js", "PostgreSQL"],
    website: "",
  },
  {
    company: "University of North Florida",
    title: "Webmaster",
    started: "Feb. 2022",
    ended: "May 2023",
    description:
      "Migrated 50+ web pages to a modern CMS solution via rebuilding each page with  modern web standards and ADA accessibility. Integrated with an SSO API to serve role-based content to users.",
    tags: ["Cascade CMS", "HTML/CSS", "REST API"],
    website: "https://unf.edu",
  },
];
