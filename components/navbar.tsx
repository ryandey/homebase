import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Linkedin } from "lucide-react";
import ThemeToggle from "./theme-toggle";

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
    <div className="fixed top-0 z-50 w-full bg-background/50 backdrop-blur-xl border-b border-input h-14 hidden sm:block">
      <div className="flex flex-row justify-between items-center h-full">
        <Link
          href="/"
          passHref
          className="flex flex-row items-center gap-3 pl-6 sm:pr-8 md:pr-20 border-r border-input h-full bg-background/0 hover:bg-accent/50 transition-all"
        >
          <Image
            src="/logos/logo-light.svg"
            alt="Ryan Dey's logo"
            width={30}
            height={30}
            className="hidden dark:block"
          />
          <Image
            src="/logos/logo-dark.svg"
            alt="Ryan Dey's logo"
            width={30}
            height={30}
            className="block dark:hidden"
          />
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
          <Link
            href="https://linkedin.com/in/ryanpdey"
            target="_blank"
            passHref
            className="hidden md:block"
          >
            <Button
              variant="ghostFlat"
              size="icon"
              className="border-x border-input"
            >
              <Linkedin />
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
