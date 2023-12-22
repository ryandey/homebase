import "./globals.css"
import { Inter_Tight } from "next/font/google"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

import { cn } from "@/lib/utils"
import { Header } from "@/components/header"

export const fontSans = Inter_Tight({
  subsets: ["latin"],
})

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
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="pt-navigation-height">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
