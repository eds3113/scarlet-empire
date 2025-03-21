import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Scarlet Empire - Elite Gaming Community",
  description: "Join the elite gaming community where strategy meets dominance",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="hydration-fix" strategy="beforeInteractive">
          {`
            (function() {
              // cz-shortcut-listen özniteliğini ve diğer hidrasyon problemlerine neden olan özellikleri temizle
              document.addEventListener('DOMContentLoaded', () => {
                if (document.documentElement.hasAttribute('cz-shortcut-listen')) {
                  document.documentElement.removeAttribute('cz-shortcut-listen');
                }
              });
            })();
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}