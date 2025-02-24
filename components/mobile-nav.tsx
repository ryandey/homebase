"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Github, Instagram, Linkedin, Paperclip } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./theme-toggle";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/ryanpdey",
    icon: <Linkedin />,
  },
  {
    title: "GitHub",
    url: "https://github.com/ryandey",
    icon: <Github />,
  },
  {
    title: "Instagram",
    url: "https://instagram.com/ryanpdey",
    icon: <Instagram />,
  },
];

export function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const topOffset =
          element.getBoundingClientRect().top + window.pageYOffset - 20;
        window.scrollTo({ top: topOffset, behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <div className="fixed top-0 z-50 w-full bg-background/50 backdrop-blur-xl border-b border-input h-14 sm:hidden">
      <div className="flex justify-between items-center h-full">
        {/* Logo and Workmark */}
        <Link
          href="/"
          passHref
          className="flex flex-row items-center gap-3 pl-6 pr-8 border-r border-input h-full bg-background/0 hover:bg-accent/50 transition-all"
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

        <div className="flex">
          <div className="h-14 border-l border-input">
            <ThemeToggle />
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            {/* Hamburger */}
            <SheetTrigger asChild>
              <Button
                variant="ghostFlat"
                size="icon"
                className="border-l border-input"
              >
                <span className="sr-only">Open menu</span>
                <Menu />
              </Button>
            </SheetTrigger>

            {/* Menu */}
            <SheetContent side="right" className="w-[90%]">
              <SheetHeader className="border-b border-input">
                <SheetTitle className="flex items-center justify-between">
                  {/* Logo and Workmark */}
                  <div className="flex flex-row items-center gap-3 pl-6 pr-8">
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
                  </div>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghostFlat"
                      size="icon"
                      className="border-x border-input"
                    >
                      <X />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetTrigger>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col m-8 ml-12 space-y-8 font-instrumentSerif">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-5xl hover:text-primary transition-colors"
                    onClick={() => handleLinkClick(item.href)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <SheetDescription />

              {/* Socials */}
              <div className="mt-auto border-t border-input flex justify-end items-center">
                <div className="flex">
                  {socials.map((social) => (
                    <Link
                      key={social.title}
                      href={social.url}
                      target="_blank"
                      passHref
                    >
                      <Button
                        variant="ghostFlat"
                        size="icon"
                        className="border-l border-input"
                      >
                        {social.icon}
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
