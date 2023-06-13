import "./globals.css"
import { Inter_Tight } from "next/font/google"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const interTight = Inter_Tight({ subsets: ["latin"] })

export const metadata = {
  title: "Ryan Dey | Portfolio",
  description:
    "Personal website for Ryan Dey, a web developer based out of Jacksonville, FL.",
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
      </head>
      <body className={interTight.className}>
        <div>
          <Header />
          <main className="pt-navigation-height">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
