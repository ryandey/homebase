import { ExternalLink } from "lucide-react";
import { Badge } from "../ui/badge";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../ui/tooltip";

export type JobModel = {
  company: string;
  title: string;
  started: string;
  ended: string;
  description: string;
  tags: string[];
  website: string;
};

export interface JobProps {
  job: JobModel;
}

export default function Job(props: JobProps) {
  const { company, title, started, ended, description, tags, website } =
    props.job;

  return (
    <TooltipProvider>
      <div className="py-4">
        <ul>
          {/* Dates */}
          <li className="text-sm text-muted-foreground">
            {started} &mdash; {ended}
          </li>

          {/* Job title and Company */}
          <li className="font-heading mb-1">
            <h3 className="capitalize inline">{title} &#183; </h3>
            <Tooltip>
              <TooltipTrigger>
                <a
                  href={website}
                  target="_blank"
                  className="capitalize transition-all duration-300 hover:text-muted-foreground"
                >
                  {company}
                </a>
              </TooltipTrigger>
              <TooltipContent className="flex flex-row gap-1">
                <p>
                  Go to <span className="font-bold">{website}</span>
                </p>
                <ExternalLink size={18} />
              </TooltipContent>
            </Tooltip>
          </li>

          {/* Description */}
          <li className="text-muted-foreground mb-2">{description}</li>

          {/* Tags */}
          <li>
            {tags.map((tag) => {
              return (
                <Badge
                  key={`tag-${Math.random() * 100}`}
                  variant="outline"
                  className="mr-1"
                >
                  {tag}
                </Badge>
              );
            })}
          </li>
        </ul>
      </div>
    </TooltipProvider>
  );
}
