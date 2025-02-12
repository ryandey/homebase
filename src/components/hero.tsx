import Logo from "@/assets/logo.svg";
import { Button } from "./ui/button";
import { SendHorizonal } from "lucide-react";

export const Hero = () => {
  return (
    <>
      <section className="py-16 mt-16 grid gap-8 sm:grid-cols-2 md:mt-28 lg:mt-32 md:mb-5">
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
            Software Engineer based in Richardson, TX
          </p>

          <div className="flex gap-12 space-between">
            {/* CTA */}
            <Button
              className="email-btn rounded-xl justify-between px-6 h-12 group transition-all duration-300 ease-in-out sm:w-auto hover:shadow-muted hover:shadow-xl"
              asChild
            >
              <a href="mailto:hello@ryanpdey.com">
                Email me{" "}
                <SendHorizonal
                  strokeWidth={2}
                  className="ml-2 transition-all duration-300 ease-in-out group-hover:translate-x-1.5"
                />
              </a>
            </Button>
          </div>
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
