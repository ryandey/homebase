import { MenuIcon } from "lucide-react";
import Logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";

export default function Nav() {
  return (
    // Mobile Nav
    <div className="z-50 h-20 px-6 py-2 fixed top-0 w-full backdrop-blur-sm bg-background/50 border-b/50">
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
}
