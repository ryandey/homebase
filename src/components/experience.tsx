import { Job } from "@/components/misc/job";

export interface IJob {
  company: string;
  title: string;
  started: string;
  ended: string;
  description: string;
  tags: string[];
  website: string;
}

export const Experience = () => {
  return (
    <div className="py-5">
      <h2 className="text-3xl mb-3">Experience</h2>
      {JOB_LIST.map((job) => {
        return <Job key={job.title} job={job} />;
      })}
    </div>
  );
};

const JOB_LIST: IJob[] = [
  {
    company: "Florida Blue",
    title: "Associate IT Developer",
    started: "May 2023",
    ended: "Present",
    description: "Description about job here.",
    tags: ["React.js", "PostgreSQL", "Next.js"],
    website: "https://floridablue.com",
  },
  {
    company: "Florida Blue",
    title: "Associate IT Develaoper",
    started: "May 2023",
    ended: "Present",
    description: "Description about job here.",
    tags: ["React.js", "PostgreSQL", "Next.js"],
    website: "https://floridablue.com",
  },
  {
    company: "Florida Blue",
    title: "Associate IT Developesr",
    started: "May 2023",
    ended: "Present",
    description: "Description about job here.",
    tags: ["React.js", "PostgreSQL", "Next.js"],
    website: "https://floridablue.com",
  },
];
