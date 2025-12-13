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
          className="flex flex-row items-center gap-3 pl-6 sm:pr-8 md:pr-20 border-r border-input h-full bg-background/0 hover:bg-accent/50 transition-all"
        >
          <Image
            src="/logos/logo-light.svg"
            alt="Ryan Dey's logo"
            width={30}
            height={30}
            className="hidden dark:block h-auto"
          />
          <Image
            src="/logos/logo-dark.svg"
            alt="Ryan Dey's logo"
            width={30}
            height={30}
            className="block dark:hidden h-auto"
          />
          <p>Ryan Dey</p>
        </Link>
        <div className="flex flex-row items-center">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */}
                  <NavigationMenuLink asChild>
                    <Link href={item.url}>{item.title}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Link
            href="https://linkedin.com/in/ryanpdey"
            target="_blank"
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
