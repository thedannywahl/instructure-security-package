"use client"

import React, { createContext, useContext, useState } from 'react';
import { TrayProps, AppTrayTitle, AppTrayContent } from './types';
import { AppTrayContextType, Props } from './interfaces';

/**
 * The App Tray context.
 * It is created with the AppTrayContextType and is initially undefined.
 */
const AppTrayContext = createContext<AppTrayContextType | undefined>(undefined);

/**
 * Custom hook to use the App Tray context.
 * It throws an error if the context is not used within the App Tray Provider.
 * @returns The App Tray context.
 */
export const useAppTray = (): AppTrayContextType => {
  const context = useContext(AppTrayContext);
  if (!context) {
    throw new Error('useAppTray must be used within a AppTrayProvider');
  }
  return context;
};

/**
 * The App Tray Provider component.
 * It provides the App Tray context to its children.
 * @param children - The children elements.
 */
export const AppTrayProvider: React.FC<Props> = ({ children }) => {
  const [trayIsOpen, setTrayIsOpen] = useState<boolean>(false);
  const [trayContent, setTrayContent] = useState<AppTrayContent | null>(null);
  const [trayTitle, setTrayTitle] = useState<AppTrayTitle | null>(null);
  const [trayProps, setTrayProps] = useState<TrayProps[] | null>(null);
  const [label, setTrayLabel] = useState<string>("App Tray");

  const hideTray = () => setTrayIsOpen(false);
  const showTray = (trayContent?: AppTrayContent, trayTitle?: AppTrayTitle, ...trayProps: TrayProps[]) => {

    setTrayTitle(trayTitle || null)
    setTrayLabel(label)
    setTrayContent(trayContent || null)
    setTrayProps(trayProps)
    setTrayIsOpen(true)
  };
  const toggleTray = () => setTrayIsOpen(!trayIsOpen);
  const clearTray = () => {
    setTrayContent(null)
    setTrayTitle(null)
  }

  return (
    <AppTrayContext.Provider value={{
      showTray,
      hideTray,
      toggleTray,
      clearTray,
      trayIsOpen,
      trayContent,
      trayTitle,
      label: "App Tray",
      ...trayProps
    }}>
      {children}
    </AppTrayContext.Provider>
  );
}