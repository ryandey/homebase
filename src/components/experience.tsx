import Job from "../components/misc/job";

export const Experience = () => {
  return (
    <section className="flex flex-col my-10 py-5" id="experience">
      <h2 className="text-3xl"></h2>

      <div className="flex flex-row justify-between items-center mb-5">
        <h2 className="text-3xl">Experience</h2>

        <a
          href="/Ryan_Dey_Resume_RDXYZ_Aug-2024.pdf"
          target="_blank"
          className="flex flex-row gap-1 items-center group py-1"
        >
          <p className="text-sm text-muted-foreground transition-all ease-in-out duration-300 group-hover:text-white">
            View full résumé
          </p>
        </a>
      </div>

      {/* Jobs */}
      <div className="flex flex-col mb-4 gap-8">
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
    title: "Software Developer",
    started: "May 2023",
    ended: "Present",
    description:
      "Participate in the research and development of user interface improvements and innovations on cross-functional projects through communication with product owners, leadership, and users. Explore strategies to implement artificial intelligence into legacy applications to improve throughput across the organization.",
    tags: [
      "JavaScript",
      "TypeScript",
      "React",
      "Express",
      "OpenShift",
      "Jenkins",
      "Figma",
    ],
    website: "https://floridablue.com",
  },
  {
    company: "Radiata Web",
    title: "Software Engineer",
    started: "April 2023",
    ended: "Present",
    description:
      "Work with small local businesses and key stakeholders to determine user requirements for a website, then design, prototype, and develop a custom web solution tailored to those needs. Communicate directly with business owners throughout each stage to ensure the delivery of a website that meets every functional, accessible, and aesthetic requirement. ",
    tags: [
      "TypeScript",
      "React",
      "Next.js",
      "SSR",
      "PostgreSQL",
      "AWS",
      "Figma",
    ],
    website: "https://radiataweb.netlify.app/",
  },
  {
    company: "University of North Florida",
    title: "IT Analyst",
    started: "July 2021",
    ended: "May 2023",
    description:
      "Provided graphic design, web development, IT support, and device management services to faculty, University-designated individuals, and individual departments across the University of North Florida. Collaborated with senior graphic designers and web developers to update and design web applications, faculty pages, and event pages to encourage student and faculty involvement and awareness.",
    tags: [
      "Python",
      "HTML/CSS",
      "Cascade CMS",
      "SSO",
      "REST API",
      "Active Directory",
      "JAMF",
    ],
    website: "https://unf.edu",
  },
];
