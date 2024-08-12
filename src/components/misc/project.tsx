import { Card, CardTitle, CardHeader } from "../ui/card";

type ProjectModel = {
  title: string;
  previewUrl: string;
  projectUrl: string;
};

interface ProjectProps {
  project: ProjectModel;
}

export function Project(props: ProjectProps) {
  const { title, previewUrl, projectUrl } = props.project;

  return (
    <>
      <a href={projectUrl}>
        <Card className="rounded-lg bg-card">
          <img
            src={previewUrl}
            className="h-60 w-full object-cover rounded-tl-lg rounded-tr-lg"
          />
          <CardHeader>
            <CardTitle className="">{title}</CardTitle>
          </CardHeader>
        </Card>
      </a>
    </>
  );
}
