import { Linkedin, Github, Instagram } from "lucide-react";

export const Hero = () => {
  return (
    <>
      <section className="py-16 mt-16 md:mt-28 lg:mt-32 mx-6 md:mb-5">
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
        <div className="flex gap-3">
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
        </div>
      </section>
    </>
  );
};
