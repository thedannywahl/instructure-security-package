"use client"

import { View } from "@instructure/ui"
import LayoutTopNavBar from "@/components/LayoutTopNavBar/Component"
import LayoutAppTray from "@/components/LayoutAppTray/Component"
import { AppTrayProvider } from "@/components/LayoutAppTray/Context"
import LayoutAppModal from "@/components/LayoutAppModal/Component"
import { AppModalProvider } from "@/components/LayoutAppModal/Context"
import { InstUI } from "@/lib/ThemeProvider"

import "./globals.css";

/**
 * RootLayout function component
 * @param {object} props - The properties that define the component.
 * @param {React.ReactNode} props.children - The child elements of the component.
 */
function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <InstUI>
      <AppTrayProvider>
        <AppModalProvider>
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
              <LayoutAppModal />
              <LayoutAppTray />
            </View>
          </html>
        </AppModalProvider>
      </AppTrayProvider>
    </InstUI>

  );
}

export const runtime = "edge"

export default RootLayout