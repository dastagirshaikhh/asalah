import "./globals.css"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import type React from "react"

const poppins = Poppins({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Asalah - Faith-Driven Personal Branding",
  description: "Build a strong personal brand that aligns with your faith, values, and professional expertise.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-white text-gray-800`}>{children}</body>
    </html>
  )
}

