import Link from "next/link"
import { cva, VariantProps } from "class-variance-authority"

interface ButtonProps extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode
  href: string
}

const buttonClasses = cva(
  "rounded-lg inline-flex items-center gap-1 hover:text-shadow hover:shadow-primary-shadow transition-shadow duration-300 ease-out",
  {
    variants: {
      variant: {
        primary: "bg-primary",
        secondary: "bg-primaryDark",
        tertiary: "",
      },
      size: {
        small: "text-xs px-3 h-7",
        medium: "text-sm px-4 h-9",
        large: "text-md px-6 h-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
)

export const Button = ({ children, href, variant, size }: ButtonProps) => {
  return (
    <Link href={href} className={buttonClasses({ variant, size })}>
      {children}
    </Link>
  )
}
