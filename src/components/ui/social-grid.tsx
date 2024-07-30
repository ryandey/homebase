import { Linkedin, Github, Instagram } from "lucide-react";
import { Button } from "./button";

export const SocialGrid = () => {
  return (
    <div className="my-5 grid grid-cols-4 gap-3 h-20">
      <Button
        variant="secondary"
        className="col-span-2 h-full bg-accent rounded-xl"
      >
        <Linkedin color="var(--foreground)" strokeWidth={1.5} />
      </Button>
      <Button variant="secondary" className="h-full rounded-xl">
        <Github color="var(--foreground)" strokeWidth={1.5} />
      </Button>
      <Button variant="secondary" className="h-full rounded-xl">
        <Instagram color="var(--foreground)" strokeWidth={1.5} />
      </Button>
    </div>
  );
};
