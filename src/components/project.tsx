import Link from "next/link"
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons"
import Image, { StaticImageData } from "next/image"

interface ProjectProps {
  name: string
  description: string
  link: string
  source: string
  image: StaticImageData
  imageAlt: string
}

export const Project = ({
  name,
  description,
  link,
  source,
  image,
  imageAlt,
}: ProjectProps) => (
  <>
    <div className="bg-primary-dark border border-white-a08 rounded-3xl transition-translate duration-500 ease-out hover:-translate-y-3 ">
      <div className="flex flex-col w-full h-auto bg-primaryDark rounded-3xl items-center justify-center text-lg text-grey">
        <Image
          src={image}
          width={540}
          height={300}
          alt={imageAlt}
          className="rounded-t-3xl"
        />
      </div>

      <div className="grid grid-cols-projectCard pt-4 pb-5 px-6 items-center bg-primary rounded-b-3xl bg-gradient-to-r from-primary-shadow to-primary">
        <div className="text-start">
          <h3 className="text-lg">{name}</h3>
          <p className="text-sm text-grey-a038">{description}</p>
        </div>

        {link && source && (
          <div className="flex justify-end gap-4 items-center [&_a]:px-2">
            <Link href={source} target="_blank">
              <GitHubLogoIcon />
            </Link>
            <Link href={link} target="_blank">
              <ExternalLinkIcon />
            </Link>
          </div>
        )}

        {link && !source && (
          <div className="flex justify-end gap-4 items-center [&_a]:px-2">
            <Link href={link} target="_blank">
              <ExternalLinkIcon />
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
