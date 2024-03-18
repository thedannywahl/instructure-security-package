import { ComponentProps, ReactNode } from 'react';
import { Tray } from "@instructure/ui";

/**
 * `TrayProps` is a type that represents the properties of a Tray component.
 * It extends the properties of the Tray component from the '@instructure/ui' library and adds an optional `label` property.
 * 
 * @property {ComponentProps<typeof Modal>} ComponentProps - The properties of the INSTUI Tray component.
 * @property {string} [label] - An optional label for the Tray.
 */
export type TrayProps = ComponentProps<typeof Tray> & { label?: string };

/**
 * Type for the content of the App Tray.
 * It can be a JSX element, a React node, or a string.
 */
export type AppTrayContent = JSX.Element | ReactNode | string

/**
 * Type for the title of the App Tray.
 * It is a string.
 */
export type AppTrayTitle = string | null