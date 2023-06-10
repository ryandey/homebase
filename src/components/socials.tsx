import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons"
import Link from "next/link"
import classNames from "classnames"

export const Socials = ({ className }: { className?: string }) => (
  <div className={classNames("h-full items-center", className)}>
    <Link href="https://github.com/ryandey" target="_blank" className="mr-6">
      <GitHubLogoIcon className="hover:text-grey duration-300 transition:color " />
    </Link>
    <Link
      href="https://www.linkedin.com/in/ryanpdey/"
      target="_blank"
      className="mr-6"
    >
      <LinkedInLogoIcon className="hover:text-grey duration-300 transition:color" />
    </Link>
    <Link href="https://www.instagram.com/ryanpdey/" target="_blank">
      <InstagramLogoIcon className="hover:text-grey duration-300 transition:color" />
    </Link>
  </div>
)
