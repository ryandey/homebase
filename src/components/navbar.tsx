"use client";

import Link from "next/link";
import Logo from "./logo";
import { ModeToggle } from "./ui/mode-toggle";
import {
  HomeIcon,
  PersonIcon,
  BackpackIcon,
  FileTextIcon,
} from "@radix-ui/react-icons";

function Navbar() {
  return (
    <>
      {/* Mobile Nav */}
      <header className="sm:hidden fixed bottom-0 left-0 right-0 z-50 w-full border-t border-gray-200 dark:border-gray-800 dark:bg-primary">
        <div className="flex h-20 items-center">
          <nav className="flex w-full h-full items-center justify-around">
            <Link
              href="/"
              className="p-4 transition-colors font-medium hover:text-gray-900 text-primary dark:text-white dark:hover:text-gray-400"
            >
              <HomeIcon />
            </Link>
            <Link
              href="/about"
              className="p-4 transition-colors font-medium hover:text-gray-900 text-primary dark:text-white dark:hover:text-gray-400"
            >
              <PersonIcon />
            </Link>
            <Link
              href="/work"
              className="p-4 transition-colors font-medium hover:text-gray-900 text-primary dark:text-white dark:hover:text-gray-400"
            >
              <BackpackIcon />
            </Link>
            <Link
              href="/experience"
              className="p-4 transition-colors font-medium hover:text-gray-900 text-primary dark:text-white dark:hover:text-gray-400"
            >
              <FileTextIcon />
            </Link>
          </nav>
        </div>
      </header>

      {/* Tablet/Desktop Nav */}
      <header className="hidden sm:block sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 dark:bg-primaryDark backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          {/* Logo */}
          <div className="mr-4 hidden sm:flex">
            {/* Link Wrapper */}
            <Link href="/" className="mr-6 flex items-center space-x-3">
              {/* Image */}
              <Logo />

              {/* Name Text */}
              <span className="hidden font-bold sm:inline-block text-primary dark:text-gray-50">
                Ryan Dey
              </span>
            </Link>

            {/* Links */}
            <nav className="flex items-center gap-4 text-sm lg:gap-6">
              <Link
                href="/about"
                className="transition-colors font-medium hover:text-gray-900 text-gray-500 dark:hover:text-gray-400"
              >
                About
              </Link>
              <Link
                href="/work"
                className="transition-colors font-medium hover:text-gray-900 text-gray-500 dark:hover:text-gray-400"
              >
                Work
              </Link>
              <Link
                href="/experience"
                className="transition-colors font-medium hover:text-gray-900 text-gray-500 dark:hover:text-gray-400"
              >
                Experience
              </Link>
            </nav>
          </div>

          {/* Theme Toggler */}
          <ModeToggle />
        </div>
      </header>
    </>
  );
}

export default Navbar;
