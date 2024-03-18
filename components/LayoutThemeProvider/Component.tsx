"use client"

import React, { ComponentProps } from 'react';
import { InstUISettingsProvider } from "@instructure/emotion"
import { canvas } from "@instructure/ui"
import { generateInstanceCounterMap } from "@instructure/ui-react-utils"
import { AppTrayProvider } from '@/components/LayoutAppTray/Context';
import { AppModalProvider } from '@/components/LayoutAppModal/Context';

/**
 * Type for the properties of the InstUI component
 */
type InstUIProps = ComponentProps<typeof InstUISettingsProvider> & {};

/**
 * InstUI function component
 * @param {object} props - The properties that define the component.
 * @param {React.ReactNode} props.children - The child elements of the component.
 * @returns {JSX.Element} The rendered JSX element.
 */
export const InstUI: React.FC<InstUIProps> = ({ children }: { children?: React.ReactNode; }): JSX.Element => {

  /**
   * Instance counter map for Instructure UI components.
   * @type {Map<string, number>}
   */
  const counter: Map<string, number> = generateInstanceCounterMap()
  counter.set('App', 0)

  return (
    <InstUISettingsProvider
      theme={canvas}
      instanceCounterMap={counter}
    >
      <AppTrayProvider>
        <AppModalProvider>
          {children}
        </AppModalProvider>
      </AppTrayProvider>
    </InstUISettingsProvider>
  )
}