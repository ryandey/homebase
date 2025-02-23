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
    <div className="fixed top-0 w-full bg-background/50 backdrop-blur-xl border-b border-input h-14 hidden lg:block">
      <div className="flex flex-row justify-between items-center h-full">
        <Link
          href="/"
          passHref
          className="flex flex-row items-center gap-3 pl-6 pr-20 border-r border-input h-full hover:bg-accent transition-all"
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
          <Button variant="ghost" size="icon" className="border-x border-input">
            <Linkedin />
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
