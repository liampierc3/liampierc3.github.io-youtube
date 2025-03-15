import "./globals.css"
import { Fira_Code } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type { ReactNode } from "react"

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

export const metadata = {
  title: "Liam's Video Portfolio",
  description: "Freelance video production and storytelling",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${firaCode.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}