"use client"

import { View } from "@instructure/ui"
import LayoutTopNavBar from "@/components/LayoutTopNavBar/Component"
import LayoutAppTray from "@/components/LayoutAppTray/Component"
import { InstUI } from "@/components/LayoutThemeProvider/Component"

import "./globals.css";
import LayoutAppModal from "@/components/LayoutAppModal/Component"

/**
 * RootLayout function component
 * @param {object} props - The properties that define the component.
 * @param {React.ReactNode} props.children - The child elements of the component.
 */
function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <InstUI>
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
          <LayoutAppModal />
        </View>
      </html>
    </InstUI>

  );
}

export const runtime = "edge"

export default RootLayout