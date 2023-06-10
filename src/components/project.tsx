import Link from "next/link"
import { Button } from "./ui/button"
import { GlobeIcon, GitHubLogoIcon } from "@radix-ui/react-icons"

interface ProjectProps {
  name: string
  description: string
  link: string
  source: string
}

export const Project = ({ name, description, link, source }: ProjectProps) => (
  <>
    <div className="bg-primary-dark border border-white-a08 rounded-3xl">
      <div className="flex flex-col w-full h-[20rem] bg-primaryDark rounded-3xl items-center justify-center text-lg text-grey">
        {name}
        <span className="text-sm">Preview coming soon</span>
      </div>

      <div className="grid grid-cols-projectCard py-4 px-6 items-center">
        <div className="text-start">
          <h3 className="text-lg">{name}</h3>
          <p className="text-sm text-grey">{description}</p>
        </div>

        {link && source && (
          <div className="flex justify-end gap-4 items-center [&_a]:px-2">
            <Link href={source} target="_blank">
              <GitHubLogoIcon />
            </Link>
            <Link href={link} target="_blank">
              <GlobeIcon />
            </Link>
          </div>
        )}

        {link && !source && (
          <div className="flex justify-end gap-4 items-center [&_a]:px-2">
            <Link href={link} target="_blank">
              <GlobeIcon />
            </Link>
          </div>
        )}

        {!link && source && (
          <div className="flex justify-end gap-4 items-center [&_a]:px-2">
            <Link href={source} target="_blank">
              <GitHubLogoIcon />
            </Link>
          </div>
        )}
      </div>
    </div>
  </>
)
