import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Yeshua's Purpose",
  description: "A Biblical timeline expressing the purpose of Yeshua",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeToggle />
          {children}
          <div className="hidden md:fixed md:block bottom-0 w-full h-40 z-[1000] bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none"></div>
        </ThemeProvider>
      </body>
    </html>
  )
}
