import { Linkedin, Github, Instagram } from "lucide-react";
import Logo from "@/assets/logo.svg";
import Socials from "./misc/socials";

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

          <Socials />
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
