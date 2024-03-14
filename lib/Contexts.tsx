import React, { ReactNode, createContext, useContext, useState } from 'react';

type AppTrayContent = JSX.Element | ReactNode | string
type AppTrayTitle = string

interface AppTrayContextType {
  showTray: (content: AppTrayContent, title?: AppTrayTitle) => void;
  hideTray: () => void;
  toggleTray: () => void;
  clearTray: () => void;
  trayIsOpen: boolean;
  trayContent: AppTrayContent | null;
  trayTitle: AppTrayTitle | null;
}

interface Props {
  children: React.ReactNode;
}

const AppTrayContext = createContext<AppTrayContextType | undefined>(undefined);

export const useAppTray = (): AppTrayContextType => {
  const context = useContext(AppTrayContext);
  if (!context) {
    throw new Error('useAppTray must be used within a AppTrayProvider');
  }
  return context;
};

export const AppTrayProvider: React.FC<Props> = ({ children }) => {
  const [trayIsOpen, setTrayIsOpen] = useState<boolean>(false);
  const [trayContent, setTrayContent] = useState<AppTrayContent | null>(null);
  const [trayTitle, setTrayTitle] = useState<AppTrayTitle | null>(null);

  const hideTray = () => setTrayIsOpen(false);
  const showTray = (trayContent: AppTrayContent, trayTitle?: AppTrayTitle) => {
    setTrayTitle(trayTitle || null)
    setTrayContent(trayContent || null)
    setTrayIsOpen(true)
  };
  const toggleTray = () => setTrayIsOpen(!trayIsOpen);
  const clearTray = () => {
    setTrayContent(null)
    setTrayTitle(null)
  }

  return (
    <AppTrayContext.Provider value={{ hideTray, showTray, toggleTray, clearTray, trayIsOpen, trayContent, trayTitle }}>
      {children}
    </AppTrayContext.Provider>
  );
}