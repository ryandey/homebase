import { Linkedin, Github, Instagram } from "lucide-react";
import { Button } from "./button";

export const SocialGrid = () => {
  return (
    <div className="my-5">
      <Button variant="secondary" className="">
        <Linkedin color="var(--foreground)" strokeWidth={1.5} />
      </Button>
      <Button variant="secondary">
        <Github color="var(--foreground)" strokeWidth={1.5} />
      </Button>
      <Button variant="secondary">
        <Instagram color="var(--foreground)" strokeWidth={1.5} />
      </Button>
    </div>
  );
};
