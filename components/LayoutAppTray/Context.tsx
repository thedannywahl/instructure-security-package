"use client"

import { ComponentProps } from 'react';
import React, { ReactNode, createContext, useContext, useState } from 'react';
import { Tray } from "@instructure/ui";

type TrayProps = ComponentProps<typeof Tray> & { label?: string };

/**
 * Type for the content of the App Tray.
 * It can be a JSX element, a React node, or a string.
 */
type AppTrayContent = JSX.Element | ReactNode | string

/**
 * Type for the title of the App Tray.
 * It is a string.
 */
type AppTrayTitle = string | null

/**
 * Interface for the App Tray context.
 * It includes methods for showing, hiding, toggling, and clearing the tray,
 * as well as the state of the tray (whether it's open, its content, and its title).
 */
interface AppTrayContextType extends TrayProps {
  showTray: (content?: AppTrayContent, title?: AppTrayTitle, ...TrayProps: TrayProps[]) => void;
  hideTray: () => void;
  toggleTray: () => void;
  clearTray: () => void;
  trayIsOpen: boolean;
  trayContent: AppTrayContent | null;
  trayTitle: AppTrayTitle | null;
}

/**
 * Interface for the props of the App Tray Provider component.
 * It includes children, which are React nodes.
 */
interface Props {
  children: React.ReactNode;
}

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

    console.log("label:", label)
    console.log("trayProps:", trayProps)

    if (trayProps && trayProps.length > 0) {
      trayProps[0].label = trayProps[0].label || label;
    }
    setTrayTitle(trayTitle || null)
    setTrayLabel(trayProps[0].label)
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