"use client"

import { View } from "@instructure/ui"
import LayoutTopNavBar from "@/components/LayoutTopNavBar/Component"
import LayoutAppTray from "@/components/LayoutAppTray/Component"

import "./globals.css";

import { AppTrayProvider } from "@/lib/Contexts"
import { InstUI } from "@/lib/ThemeProvider"

/**
 * RootLayout function component
 * @param {object} props - The properties that define the component.
 * @param {React.ReactNode} props.children - The child elements of the component.
 */
function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <InstUI>
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
    </InstUI>

  );
}

export const runtime = "edge"

export default RootLayout