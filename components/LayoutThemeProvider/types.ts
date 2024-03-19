import { ComponentProps } from 'react';
import { InstUISettingsProvider } from "@instructure/emotion"

/**
 * `Props` is a type that represents the properties of an InstUISettingProvider context.
 * It extends the properties of the InstUISettingsProvider context from the '@instructure/emotion'library.
 * 
 * @property {ComponentProps<typeof Modal>} ComponentProps - The properties of the InstUISettingProvider context..
 */
export type Props = ComponentProps<typeof InstUISettingsProvider>;
