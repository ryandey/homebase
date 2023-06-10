import { Logo } from "@/assets/icons/logo"
import { Container } from "./ui/container"
import { Socials } from "./socials"

export const Footer = () => (
  <footer className="border-t border-white-a08 py-[5.6rem] mt-12 text-sm">
    <Container className="flex justify-between">
      <div className="flex items-center gap-2 text-xs text-offwhite">
        <Logo className="w-[2.4rem] h-[2.4rem] items-center" />
      </div>
      <div className="hidden md:flex items-center text-sm text-grey">
        Copyright &copy; {new Date().getFullYear()} &#8212; Radiata Web, LLC
      </div>
      <div>
        <Socials className="flex" />
      </div>
    </Container>
  </footer>
)
