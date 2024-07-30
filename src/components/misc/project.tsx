import { Card, CardContent, CardTitle, CardHeader } from "../ui/card";

export type ProjectModel = {
  title: string;
  previewUrl: string;
  projectUrl: string;
};

export interface ProjectProps {
  project: ProjectModel;
}

export function Project(props: ProjectProps) {
  const { title, previewUrl, projectUrl } = props.project;

  return (
    <>
      <a href={projectUrl}>
        <Card className="rounded-xl bg-card">
          <img
            src={previewUrl}
            className="h-60 w-full object-cover rounded-tl-xl rounded-tr-xl"
          />
          <CardHeader>
            <CardTitle className="">{title}</CardTitle>
          </CardHeader>
        </Card>
      </a>
    </>
  );
}
