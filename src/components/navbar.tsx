"use client";

import Link from "next/link";
import Logo from "./logo";
import { ModeToggle } from "./ui/mode-toggle";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
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
        </div>

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

        {/* Right Side */}
        <div className="flex flex-1 justify-between space-x-2 md:justify-end">
          {/* Theme Toggler */}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
