"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Container } from "./ui/container"

// Images
import ReactLogo from "@/assets/images/logos/react.png"
import NextLogo from "@/assets/images/logos/nextjs.svg"
import ViteLogo from "@/assets/images/logos/vite.png"
import PostgreLogo from "@/assets/images/logos/postgresql.png"
import MongoLogo from "@/assets/images/logos/mongodb.svg"

interface FrameworksProps {
  logoSize: number
}

interface FrameworkProps {
  altText: string
  logo: string
}

export const Frameworks = ({ logoSize }: FrameworksProps) => (
  <>
    <Container className="flex justify-center my-10 py-8">
      <motion.div
        className="flex gap-12 flex-wrap justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Image
          src={ReactLogo}
          width={48}
          height={logoSize}
          alt="React.js logo"
          className="w-auto"
        />
        <Image
          src={NextLogo}
          width={logoSize}
          height={logoSize}
          alt="Next.js logo"
        />
        <Image
          src={ViteLogo}
          width={logoSize}
          height={logoSize}
          alt="Vite.js logo"
        />
        <Image
          src={PostgreLogo}
          width={logoSize}
          height={logoSize}
          alt="PostgreSQL logo"
        />
        <Image
          src={MongoLogo}
          width={logoSize}
          height={logoSize}
          alt="MongoDB logo"
        />
      </motion.div>
    </Container>
  </>
)
