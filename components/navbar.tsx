import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Linkedin } from "lucide-react";
import ThemeToggle from "./theme-toggle";
import Logo from "./logo";

const navItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/#about",
  },
  {
    title: "Projects",
    url: "/#projects",
  },
  {
    title: "Contact",
    url: "/#contact",
  },
];

export default function Navbar() {
  return (
    <div className="w-full border-b border-input h-16">
      <div className="flex flex-row justify-between items-center h-full">
        <Link
          href="/"
          passHref
          className="flex flex-row items-center gap-3 pl-6 pr-20 border-r border-input h-full hover:bg-accent transition-all"
        >
          <Logo />
          <p>Ryan Dey</p>
        </Link>
        <div className="flex flex-row items-center">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <Link href={item.url} legacyBehavior passHref>
                    <NavigationMenuLink>{item.title}</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button variant="ghost" size="icon" className="border-r-none">
            <Linkedin />
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
