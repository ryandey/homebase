import {
  Linkedin,
  Github,
  Instagram,
  FileText,
  ExternalLink,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";

export default function Socials() {
  return (
    <>
      <TooltipProvider>
        <div className="flex gap-3">
          {/* Github */}
          <Tooltip>
            <TooltipTrigger>
              <a href="https://github.com/ryandey" target="_blank">
                <Github
                  color="var(--muted-foreground)"
                  strokeWidth={1.5}
                  className="transition-all ease-in-out duration-300 hover:stroke-white"
                />
              </a>
            </TooltipTrigger>
            <TooltipContent className="flex flex-row gap-1">
              <p>Visit my GitHub</p>
              <ExternalLink size={18} />
            </TooltipContent>
          </Tooltip>

          {/* Linkedin */}
          <Tooltip>
            <TooltipTrigger>
              <a href="https://www.linkedin.com/in/ryanpdey/" target="_blank">
                <Linkedin
                  color="var(--muted-foreground)"
                  strokeWidth={1.5}
                  className="transition-all ease-in-out duration-300 hover:stroke-white"
                />
              </a>
            </TooltipTrigger>
            <TooltipContent className="flex flex-row gap-1">
              <p>Visit my LinkedIn</p>
              <ExternalLink size={18} />
            </TooltipContent>
          </Tooltip>

          {/* Instagram */}
          <Tooltip>
            <TooltipTrigger>
              <a href="https://www.instagram.com/ryanpdey/" target="_blank">
                <Instagram
                  color="var(--muted-foreground)"
                  strokeWidth={1.5}
                  className="transition-all ease-in-out duration-300 hover:stroke-white"
                />
              </a>
            </TooltipTrigger>
            <TooltipContent className="flex flex-row gap-1">
              <p>Visit my Instagram</p>
              <ExternalLink size={18} />
            </TooltipContent>
          </Tooltip>

          {/* Resume */}
          <Tooltip>
            <TooltipTrigger>
              <a href="/Ryan_Dey_Resume_RDXYZ_Aug-2024.pdf" target="_blank">
                <FileText
                  color="var(--muted-foreground)"
                  strokeWidth={1.5}
                  className="transition-all ease-in-out duration-300 hover:stroke-white"
                />
              </a>
            </TooltipTrigger>
            <TooltipContent className="flex flex-row gap-1">
              <p>View full résumé</p>
              <ExternalLink size={18} />
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </>
  );
}
