"use client"

import Link from "next/link"
import classNames from "classnames"
import { useState } from "react"
import { Logo } from "@/assets/icons/logo"
import { Container } from "./ui/container"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { Socials } from "./socials"

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full border-b border-white-a08 backdrop-blur-[12px]">
      <Container className="flex h-navigation-height">
        <Link href="/" className="flex items-center">
          <Logo className="w-[2.4rem] h-[2.4rem] mr-4" />
        </Link>

        <div
          className={classNames(
            "transition-[visibility] md:visible",
            menuOpen ? "visible" : "invisible delay-300"
          )}
        >
          <nav
            className={classNames(
              "fixed top-navigation-height left-0 h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none",
              menuOpen
                ? "translate-x-0 opacity-100 "
                : "translate-x-[-100vw] opacity-0 "
            )}
          >
            <ul
              className={classNames(
                "flex h-full flex-col [&_li]:translate-y-4 md:[&_li]:translate-y-0 md:flex-row md:items-center  [&_li]:ml-6 [&_li]:border-b [&_li]:border-primaryDark md:[&_li]:border-none",
                "ease-in [&_a:hover]:text-grey [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full  [&_a]:items-center [&_a]:text-lg [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-sm md:[&_a]:transition-colors",
                menuOpen && "[&_a]:translate-y-0"
              )}
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/#projects">Work</Link>
              </li>
              <li>
                <Link href="/#experience">Experience</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Socials className="hidden ml-auto sm:flex" />

        {/* Hamburger menu icon */}
        <button
          className="ml-auto md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <HamburgerMenuIcon />
        </button>
      </Container>
    </header>
  )
}
