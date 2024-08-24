import { animateScroll as scroll } from "react-scroll";
import Logo from "@/assets/logo.svg";
import Socials from "./misc/socials";

export default function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer className="py-8 mx-6 space-y-8">
      <div className="grid grid-cols-1 items-center sm:grid-cols-3">
        {/* Column 1 */}
        <div className="flex flex-col gap-5 py-5 items-center sm:items-start">
          <a onClick={scrollToTop} className="hover:cursor-pointer">
            <img src={Logo} alt="Ryan Dey Logo" className="h-8" />
          </a>
        </div>

        {/* Column 2 */}
        <div className="flex justify-center">
          <Socials />
        </div>

        {/* Column 3 */}
        <div className="flex justify-center mt-8 py-2 sm:justify-end sm:mt-0">
          {/* Copyright */}
          <h5 className="text-sm text-center text-muted-foreground sm:text-start">
            Built by Ryan Dey
          </h5>
        </div>
      </div>
    </footer>
  );
}
