import Job from "@/components/misc/job";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

export const Experience = () => {
  return (
    <section className="flex flex-col py-5 mx-6 mb-5" id="experienceSection">
      <h2 className="text-3xl mb-3">Experience</h2>

      {/* Jobs */}
      <div className="mb-4">
        {JOB_LIST.map((job) => {
          return <Job key={job.title} job={job} />;
        })}
      </div>

      {/* Full resume button */}
      <Button
        variant="link"
        className="group flex-1 min-h-16 justify-start pl-0 transition-all duration-300 hover:no-underline"
      >
        See full resume{" "}
        <MoveRight
          strokeWidth={1.5}
          className="ml-2 transition-all ease-in-out duration-200 group-hover:translate-x-3"
        />{" "}
      </Button>
    </section>
  );
};

const JOB_LIST = [
  {
    company: "Florida Blue",
    title: "Assoc. IT Developer",
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
