import { Project } from "@/components/misc/project";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function WorkCarousel() {
  return (
    <Carousel
      opts={{
        loop: "true",
      }}
      className="pb-5 mb-5"
    >
      <CarouselContent>
        {PROJECTS.map((project) => {
          return (
            <CarouselItem className="basis-3/4" key={project.title}>
              <Project project={project} />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
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
