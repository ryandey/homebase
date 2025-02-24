"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
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
    <div className="sm:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="w-10 h-10">
            <span className="sr-only">Open menu</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
                <span className="font-bold text-lg">Your Logo</span>
              </div>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </SheetTrigger>
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col mt-8 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => handleLinkClick(item.href)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pt-8">
            <h3 className="font-semibold mb-4">Connect with us</h3>
            <div className="flex space-x-4">
              {/* Replace these with your custom social link buttons */}
              <Button variant="outline" size="icon">
                FB
              </Button>
              <Button variant="outline" size="icon">
                TW
              </Button>
              <Button variant="outline" size="icon">
                IG
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
