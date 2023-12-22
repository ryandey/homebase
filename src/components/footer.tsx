import { Logo } from "@/assets/icons/logo"
import { Container } from "./ui/container"
import { Socials } from "./socials"

export const Footer = () => (
  <footer className="sticky top-[100vh] border-t border-accent py-[2rem] text-sm">
    <Container className="flex justify-between">
      <div className="flex items-center gap-2 text-xs text-offwhite">
        <Logo className="w-[2.4rem] h-[2.4rem] items-center" />
      </div>
      <div className="hidden md:flex items-center text-sm text-grey">
        &copy; {new Date().getFullYear()} Ryan Dey
      </div>
      <div>
        <Socials className="flex" />
      </div>
    </Container>
  </footer>
)
