"use client"

// @TODO: SSR
import { InstUISettingsProvider } from "@instructure/emotion"
import { generateInstanceCounterMap } from "@instructure/ui-react-utils"
import { Metadata } from "next"

import { instructure, View } from "@instructure/ui"
import LayoutTopNavBar from "@/components/LayoutTopNavBar/Component"

import "./globals.css";

function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const counter = generateInstanceCounterMap()
  counter.set('App', 0)

  return (
    <InstUISettingsProvider
      theme={instructure}
      instanceCounterMap={counter}
    >
      <html lang="en">
        <View as="body"
          minHeight="100vh"
          position="relative"
          margin="0"
          padding="0"
        >
          <LayoutTopNavBar />
          <View
            as="main"
            background="primary"
            withVisualDebug

          >
            {children}
          </View>
        </View>
      </html>
    </InstUISettingsProvider>

  );
}

/* export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
} */

export const runtime = "edge" // 'nodejs' (default) | 'edge' | 'serverless'

export default RootLayout