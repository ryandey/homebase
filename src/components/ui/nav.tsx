import { MenuIcon } from "lucide-react";
import Logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";

export const Nav = () => {
  const btnSize = 16;

  return (
    // Mobile Nav
    <div className="h-20 px-6 py-2">
      <div className="flex items-center justify-between h-full">
        {/* Logo */}
        <a href="/">
          <img src={Logo} alt="Ryan Dey Logo" className="h-6" />
        </a>

        {/* Menu Button */}
        <Button variant="ghost" className="bg-blue px-2">
          <MenuIcon size={30} color="var(--foreground)" />
        </Button>
      </div>
    </div>
  );
};
