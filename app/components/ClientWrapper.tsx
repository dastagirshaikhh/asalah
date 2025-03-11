"use client"

import type { ReactNode } from "react"
import InteractiveBackground from "./InteractiveBackground"

export default function ClientWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <InteractiveBackground />
      <div className="relative z-10">{children}</div>
    </>
  )
}

