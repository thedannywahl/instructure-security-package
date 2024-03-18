import { TrayProps, AppTrayContent, AppTrayTitle } from "./types"

/**
 * Interface for the App Tray context.
 * It includes methods for showing, hiding, toggling, and clearing the tray,
 * as well as the state of the tray (whether it's open, its content, and its title).
 */
export interface AppTrayContextType extends TrayProps {
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
  export interface Props {
    children: React.ReactNode;
  }