import type { Metadata } from "next";
import { Instrument_Serif, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { MobileNavbar } from "@/components/mobile-nav";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ryan Dey | Software Engineer Portfolio",
  description:
    "Ryan Dey is a full-stack JS/TS software engineer, specializing in creating accessible and innovative React interfaces.",
  openGraph: {
    title: "Ryan Dey | Software Engineer Portfolio",
    description:
      "Ryan Dey is a full-stack JS/TS software engineer, specializing in creating accessible and innovative React interfaces.",
    url: "https://ryanpdey.com",
    siteName: "Ryan Dey | Software Engineer Portfolio",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: "https://ryanpdey.com/og.png",
        width: 440,
        height: 220,
        alt: "Website preview for Ryan Dey's software engineer portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${instrumentSans.variable} ${instrumentSerif.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MobileNavbar />
          <Navbar />
          <div className="md:mx-14 md:border-x border-input">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
