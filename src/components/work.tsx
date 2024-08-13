import { Project } from "./misc/project";

export function Work() {
  return (
    <section className="mx-6 my-10 py-5" id="workSection">
      <h2 className="text-3xl mb-5">My Work</h2>

      <div className="grid gap-4 md:grid-cols-3 mb-4">
        {PROJECTS.map((project) => {
          return <Project key={project.title} project={project} />;
        })}
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    title: "Radiata Web",
    previewUrl: "https://i.imgur.com/1a2CmuY.jpeg",
    projectUrl: "/projects/radiata-web",
  },
  {
    title: "Ryandey.xyz",
    previewUrl: "https://i.imgur.com/1a2CmuY.jpeg",
    projectUrl: "/projects/radiata-web",
  },
  {
    title: "Jass ATM",
    previewUrl: "https://i.imgur.com/1a2CmuY.jpeg",
    projectUrl: "/projects/radiata-web",
  },
];
