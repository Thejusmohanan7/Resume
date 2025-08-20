import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display, Source_Sans_3 as Source_Sans_Pro } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import LoadingScreen from "@/components/loading-screen"
import CustomCursor from "@/components/custom-cursor"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "700"],
})

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["400", "600"],
})

export const metadata: Metadata = {
  title: "Thejus Mohanan - Full-Stack Developer",
  description:
    "Experienced Full-Stack Developer specializing in React, Next.js, Python, and modern web technologies. 3+ years of building scalable applications.",
  keywords: "Full-Stack Developer, React, Next.js, Python, Django, MongoDB, Web Development, Software Engineer",
  authors: [{ name: "Thejus Mohanan" }],
  creator: "Thejus Mohanan",
  openGraph: {
    title: "Thejus Mohanan - Full-Stack Developer",
    description:
      "Experienced Full-Stack Developer specializing in React, Next.js, Python, and modern web technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thejus Mohanan - Full-Stack Developer",
    description:
      "Experienced Full-Stack Developer specializing in React, Next.js, Python, and modern web technologies.",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${sourceSansPro.variable};
  --font-mono: ${GeistMono.variable};
  --font-playfair: ${playfairDisplay.variable};
  cursor: none;
}
        `}</style>
      </head>
      <body className={`${sourceSansPro.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          <LoadingScreen />
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
