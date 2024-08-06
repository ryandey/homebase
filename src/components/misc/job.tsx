import { Badge } from "../ui/badge";

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

export function Job(props: JobProps) {
  const { company, title, started, ended, description, tags, website } =
    props.job;

  return (
    <div className="py-4">
      <ul>
        {/* Dates */}
        <li className="text-sm text-muted-foreground">
          {started} &mdash; {ended}
        </li>

        {/* Job title and Company */}
        <li className="font-heading mb-1">
          <h3 className="capitalize">
            {title} &#183;{" "}
            <a href={website} target="_blank">
              {company}
            </a>
          </h3>
        </li>

        {/* Description */}
        <li className="text-sm text-muted-foreground mb-2">{description}</li>

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
  );
}
