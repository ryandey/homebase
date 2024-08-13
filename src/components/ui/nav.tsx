import Logo from "@/assets/logo.svg";
import MobileMenu from "./mobile-menu";
import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";

export default function Nav() {
  const [isOpen, setIsOpen]: boolean = useState(false);

  return (
    <>
      <div className="z-50 h-20 px-6 py-2 fixed top-0 w-full backdrop-blur-sm bg-background/50 border-b/50">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <a href="/">
            <img src={Logo} alt="Ryan Dey Logo" className="h-6" />
          </a>

          {/* Menu Button */}
          <Hamburger
            toggled={isOpen}
            size={25}
            toggle={setIsOpen}
            color="var(--foreground)"
            easing="ease-in"
            duration={0.3}
            rounded
          />
        </div>
      </div>
      {isOpen && <MobileMenu open={isOpen} />}
    </>
  );
}
