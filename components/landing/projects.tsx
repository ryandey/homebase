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

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-8 py-16 md:py-24 md:px-16 lg:py-28 lg:px-36 border-b border-input"
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

      <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
              <div className="flex gap-2">
                {project.tags.map((tag) => (
                  <Badge key={`${project.title}-tag-${tag}`} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <p className="text-muted-foreground text-sm">2024</p>
              <Button>Read more</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

const projects = [
  {
    title: "Radiata Web",
    archived: false,
    url: "/",
    previewImage: "",
    description:
      "Brief description of this project to showcase what it's about",
    tags: ["React", "Express.js", "Next.js"],
  },
  {
    title: "Radiata Web 2",
    archived: false,
    url: "/",
    previewImage: "",
    description:
      "Brief description of this project to showcase what it's about",
    tags: ["React", "Express.js", "Next.js"],
  },
  {
    title: "Radiata Web 3",
    archived: false,
    url: "/",
    previewImage: "",
    description:
      "Brief description of this project to showcase what it's about",
    tags: ["React", "Express.js", "Next.js"],
  },
];
