import IJob from "@/components/experience";

export const Job = ({ job }: IJob) => {
  const { company, title, started, ended, description, tags, website } = job;

  return (
    <div>
      <ul>
        <li>
          {started} &em; {ended}
        </li>
        <li>
          {title} . {company}
        </li>
        <li>{description}</li>
        <li>{tags}</li>
        <li>{website}</li>
      </ul>
    </div>
  );
};
