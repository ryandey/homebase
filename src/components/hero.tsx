"use client"

import { motion } from "framer-motion"

interface HeroProps {
  children: React.ReactNode
}

interface HeroElementProps {
  children: React.ReactNode
}

export const HeroTitle = ({ children }: HeroElementProps) => {
  return (
    <motion.h1
      className="text-3xl leading-[6rem] pb-2 text-transparent bg-clip-text bg-gradient-to-br from-white to-grey-a038 my-6 md:text-5xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {children}
    </motion.h1>
  )
}

export const HeroSubtitle = ({ children }: HeroElementProps) => {
  return (
    <motion.p
      className="text-md my-6 mb-12 md:text-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {children}
    </motion.p>
  )
}

export const Hero = ({ children }: HeroProps) => {
  return <div className="text-center pt-10 pb-10 my-xl">{children}</div>
}
