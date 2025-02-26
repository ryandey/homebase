import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Github, Instagram, Linkedin } from "lucide-react";

const socials = [
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/ryanpdey",
    icon: <Linkedin />,
  },
  {
    title: "GitHub",
    url: "https://github.com/ryandey",
    icon: <Github />,
  },
  {
    title: "Instagram",
    url: "https://instagram.com/ryanpdey",
    icon: <Instagram />,
  },
];

export default function Footer() {
  return (
    <footer className="flex justify-between items-center border-y border-input -translate-y-[1px]">
      <div className="mx-14 sm:border-x border-input w-full h-full">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 h-full gap-2 items-center py-4 md:py-0">
          <div className="flex flex-row justify-center items-center gap-3 px-6 h-full">
            <Image
              src="/logos/logo-light.svg"
              alt="Ryan Dey's logo"
              width={30}
              height={30}
              className="hidden dark:block h-auto"
            />
            <Image
              src="/logos/logo-dark.svg"
              alt="Ryan Dey's logo"
              width={30}
              height={30}
              className="block dark:hidden h-auto"
            />
            <p>Ryan Dey</p>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            Copyright © 2025 Ryan Dey
          </p>

          <div className="hidden md:flex justify-end">
            {socials.map((social) => (
              <Link
                key={social.title}
                href={social.url}
                target="_blank"
                passHref
              >
                <Button
                  variant="ghostFlat"
                  size="icon"
                  className="border-l border-input"
                >
                  {social.icon}
                </Button>
              </Link>
            ))}
            {/* LinkedIn */}
          </div>
        </div>
      </div>
    </footer>
  );
}
