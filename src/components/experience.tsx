import { Job } from "@/components/misc/job";
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
        variant="secondary"
        className="flex-1 min-h-16 px-6 justify-between  rounded-xl"
      >
        See full resume <MoveRight strokeWidth={1.5} className="ml-2" />{" "}
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
      "Conceptualized and delivered optimized React.js solutions for data ingest applications, integrated databases with the backend using REST APIs, collaborated with project leads and UX engineers for rapid prototyping, and assisted in onboarding new team members.",
    tags: ["JavaScript", "React.js", "Express.js", "PostgreSQL"],
    website: "https://floridablue.com",
  },
  {
    company: "Radiata Web",
    title: "Freelance Web Developer",
    started: "Apr. 2023",
    ended: "Present",
    description:
      "Guide clients through the process of wireframing, designing, and prototyping a bespoke web solution. Migrate and host solutions through AWS Amplify with automated CI/CD pipelines that support future iterations.",
    tags: ["TypeScript", "React.js", "Next.js", "PostgreSQL"],
    website: "",
  },
  {
    company: "University of North Florida",
    title: "Webmaster",
    started: "Feb. 2022",
    ended: "May 2023",
    description:
      "Managed the migration of 50+ web pages across multiple departments to a modern CMS solution. Reconstructed each page to utilize modern web standards and to meet ADA accessibility requirements. Integrated databases with an SSO API to serve role-based content to users.",
    tags: ["Cascade CMS", "HTML/CSS", "REST API"],
    website: "https://floridablue.com",
  },
];
