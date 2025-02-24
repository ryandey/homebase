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

      <div className="grid gap-8 md:grid-cols-2 2xl:grid-cols-3 mb-12">
        {projects.map((project) => (
          <Link key={project.title} href="#" passHref>
            <Card>
              <CardHeader>
                <Image
                  src="https://github.com/ryandey/homebase/blob/master/public/previews/castle-hills.png?raw=true"
                  alt={`${project.title} mockup`}
                  width="500"
                  height={200}
                />
              </CardHeader>
              <CardContent>
                {/* Title and Description */}
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.summary}</CardDescription>

                {/* Tags */}
                <div className="flex gap-2 mt-4">
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
    title: "Radiata Web",
    archived: false,
    url: "https://github.com/ryandey/homebase/blob/master/public/previews/castle-hills.png?raw=true",
    previewImage: "",
    summary: "Brief description of this project to showcase what it's about",
    tags: ["React", "Express.js", "Next.js"],
  },
  {
    title: "Castle Hills Stain & Restoration",
    archived: false,
    url: "https://github.com/ryandey/homebase/blob/master/public/previews/castle-hills.png?raw=true",
    previewImage: "",
    summary: "Brief description of this project to showcase what it's about",
    tags: ["React", "Express.js", "Next.js"],
  },
  {
    title: "Jass ATM",
    archived: false,
    url: "https://github.com/ryandey/homebase/blob/master/public/previews/castle-hills.png?raw=true",
    previewImage: "",
    summary: "Brief description of this project to showcase what it's about",
    tags: ["React", "Express.js", "Next.js"],
  },
];
