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
    <div>
      <TooltipProvider>
        <ul>
          {/* Job title and Company */}
          <div className="flex flex-col justify-between items-start mb-1 sm:flex-row sm:items-center">
            <li className="font-heading text-lg space-x-2 sm:text-xl">
              <h3 className="capitalize inline text-lg sm:text-xl">{title}</h3>

              <p className="font-bold text-lg inline sm:text-xl">&#183;</p>

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

            {/* Dates */}
            <li>
              {started} &mdash; {ended}
            </li>
          </div>

          {/* Description */}
          <li className="text-muted-foreground mb-2">{description}</li>

          {/* Tags */}
          <span className="flex gap-2 mt-3 flex-wrap">
            {tags.map((tag) => {
              return (
                <Badge key={`tag-${Math.random() * 100}`} variant="secondary">
                  {tag}
                </Badge>
              );
            })}
          </span>
        </ul>
      </TooltipProvider>
    </div>
  );
}
