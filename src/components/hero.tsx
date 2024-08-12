import { Linkedin, Github, Instagram } from "lucide-react";
import Logo from "@/assets/logo.svg";

export const Hero = () => {
  return (
    <>
      <section className="py-16 mt-16 mx-6 grid sm:grid-cols-2 md:mt-28 lg:mt-32 md:mb-5">
        {/* Text column */}
        <div>
          {/* Name */}
          <h1 className="text-7xl uppercase mb-5">
            Ryan
            <br />
            Dey
          </h1>

          {/* Subtitle */}
          <p className="text-muted-foreground text-xl mb-10">
            Web Developer & UX Designer
          </p>

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
          </span>
        </div>

        {/* Logo column */}
        <div className="hidden sm:flex justify-end">
          <img
            src={Logo}
            alt="Ryan Dey logo"
            width={400}
            className="hidden sm:block sm:max-h-lg"
          />
        </div>
      </section>
    </>
  );
};
