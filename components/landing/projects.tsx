import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Briefcase } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col px-8 py-16 md:py-24 md:px-16 lg:py-28 lg:px-36 border-b border-input items-center"
    >
      {/* Section Label */}
      <div className="flex gap-2 justify-center items-center py-2 text-muted-foreground ">
        <Briefcase size={16} />
        <p className="text-sm">Work & Projects</p>
      </div>

      {/* Heading */}
      <h2 className="text-6xl mb-16 text-center">
        Some of the <span className="text-primary">work I've done</span>
      </h2>

      <div className="grid gap-8 grid-rows-1 md:grid-cols-2 2xl:grid-cols-3 mb-12">
        {projects.map((project) => (
          <Link key={project.title} href="#">
            <Card>
              <CardHeader>
                <Image
                  src="https://github.com/ryandey/homebase/blob/master/public/previews/castle-hills.png?raw=true"
                  alt={`${project.title} mockup`}
                  width="500"
                  height={200}
                />
              </CardHeader>
              <CardContent className="flex flex-col justify-between gap-4 h-full">
                {/* Title and Description */}
                <div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="max-w-110">
                    {project.summary}
                  </CardDescription>
                </div>

                {/* Tags */}
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <Badge
                      key={`${project.title}-tag-${tag}`}
                      variant="secondary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <Link href="https://github.com/ryandey" target="_blank" passHref>
        <Button size="lg">View more on GitHub</Button>
      </Link>
    </section>
  );
}

const projects = [
  {
    title: "Personal Portfolio",
    archived: false,
    url: "https://github.com/ryandey/homebase/blob/master/public/previews/castle-hills.png?raw=true",
    previewImage: "",
    summary:
      "Version 3 of my personal portfolio, built to practice with Tailwind 4.0.",
    tags: ["React.js", "Next.js", "Tailwind CSS", "Shadcn-UI"],
  },
  {
    title: "Castle Hills Stain & Restoration",
    archived: false,
    url: "https://github.com/ryandey/homebase/blob/master/public/previews/castle-hills.png?raw=true",
    previewImage: "",
    summary:
      "Website for a fence and gate contractor located in Carrollton, TX.",
    tags: ["TypeScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Jass ATM",
    archived: false,
    url: "https://github.com/ryandey/homebase/blob/master/public/previews/castle-hills.png?raw=true",
    previewImage: "",
    summary: "Website for an ATM sales & service business in Jacksonville, FL.",
    tags: ["JavaScript", "React.js", "Next.js", "Chakra UI"],
  },
];
