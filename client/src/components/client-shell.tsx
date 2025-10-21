"use client"

import type { ReactNode } from "react"
import { ClientProviders } from "./client-providers"
import { Navigation } from "./Navigation"
import { Footer } from "./Footer"
import { ScrollProgress } from "./ScrollProgress"

export default function ClientShell({ children }: { children: ReactNode }) {
  return (
    <ClientProviders>
      <ScrollProgress />
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </ClientProviders>
  )
}
