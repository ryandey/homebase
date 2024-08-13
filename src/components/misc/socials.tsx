import { Linkedin, Github, Instagram, FileText } from "lucide-react";

export default function Socials() {
  return (
    <>
      {/* Socials */}
      <span className="flex gap-3">
        <a href="https://github.com/ryandey" target="_blank">
          <Github
            color="var(--muted-foreground)"
            strokeWidth={1.5}
            className="transition-all ease-in-out duration-300 hover:stroke-white"
          />
        </a>

        <a href="https://www.linkedin.com/in/ryanpdey/" target="_blank">
          <Linkedin
            color="var(--muted-foreground)"
            strokeWidth={1.5}
            className="transition-all ease-in-out duration-300 hover:stroke-white"
          />
        </a>

        <a href="https://www.instagram.com/ryanpdey/" target="_blank">
          <Instagram
            color="var(--muted-foreground)"
            strokeWidth={1.5}
            className="transition-all ease-in-out duration-300 hover:stroke-white"
          />
        </a>

        <a href="https://www.instagram.com/ryanpdey/" target="_blank">
          <FileText
            color="var(--muted-foreground)"
            strokeWidth={1.5}
            className="transition-all ease-in-out duration-300 hover:stroke-white"
          />
        </a>
      </span>
    </>
  );
}
