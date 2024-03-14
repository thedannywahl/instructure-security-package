"use client"

// @TODO: SSR
import { InstUISettingsProvider } from "@instructure/emotion"
import { generateInstanceCounterMap } from "@instructure/ui-react-utils"
import { Metadata } from "next"

import { canvas, View } from "@instructure/ui"
import LayoutTopNavBar from "@/components/LayoutTopNavBar/Component"
import LayoutAppTray from "@/components/LayoutAppTray/Component"

import "./globals.css";

import { AppTrayProvider } from "@/lib/Contexts"

function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const counter = generateInstanceCounterMap()
  counter.set('App', 0)

  return (
    <InstUISettingsProvider
      theme={canvas}
      instanceCounterMap={counter}
    >
      <AppTrayProvider>
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
            <LayoutAppTray />
          </View>
        </html>
      </AppTrayProvider>
    </InstUISettingsProvider>

  );
}

/* export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
} */

export const runtime = "edge" // 'nodejs' (default) | 'edge' | 'serverless'

export default RootLayout