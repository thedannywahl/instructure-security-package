import { ComponentProps, ReactNode } from 'react';
import { Modal } from "@instructure/ui";

/**
 * `ModalProps` is a type that represents the properties of a Modal component.
 * It extends the properties of the Modal component from the 'react' library and adds an optional `label` property.
 * 
 * @property {ComponentProps<typeof Modal>} ComponentProps - The properties of the INSTUI Modal component.
 * @property {string} [label] - An optional label for the Modal.
 */
export type ModalProps = ComponentProps<typeof Modal> & { label?: string };

/**
 * Type for the content of the App Modal.
 * It can be a JSX element, a React node, or a string.
 */
export type AppModalBody = JSX.Element | ReactNode | string

/**
 * Type for the title of the App Modal.
 * It is a string.
 */
export type AppModalHeader = string | null

/**
 * Type for the title of the App Modal.
 * It is a string.
 */
export type AppModalFooter = string | null