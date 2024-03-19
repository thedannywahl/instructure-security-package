import { ComponentProps, ReactNode } from 'react';
import { Modal } from "@instructure/ui";

/**
 * `ModalProps` is a type that represents the properties of a Modal component.
 * It extends the properties of the Modal component from the 'react' library and adds an optional `label` property.
 * 
 * @property {ComponentProps<typeof Modal>} ComponentProps - The properties of the INSTUI Modal component.
 * @property {string} [label] - An optional label for the Modal.
 */
export type ModalProps = {
  modal: ComponentProps<typeof Modal>,
  header: ComponentProps<typeof Modal.Header>,
  body: ComponentProps<typeof Modal.Body>,
  footer: ComponentProps<typeof Modal.Footer>
};


export type AppModalContextType = {
  showModal: ShowModal;
  hideModal: () => void;
  toggleModal: () => void;
  clearModal: () => void;
  modalIsOpen: boolean;
  modalBody: AppModalBody;
  modalLabel?: string;
  modalHeader?: AppModalHeader | null;
  modalFooter?: AppModalFooter | null;
  modalOptions?: ModalOptions | undefined;
};

export type ModalModalProps = ComponentProps<typeof Modal>

/**
 * Type for properties of the INSTUI Modal.Header component.
 */
export type ModalHeaderProps = ComponentProps<typeof Modal.Header>;

/**
 * Type for properties of the INSTUI Modal.Body component.
 */
export type ModalBodyProps = ComponentProps<typeof Modal.Body>;

/**
 * Type for properties of the INSTUI Modal.Footer component.
 */
export type ModalFooterProps = ComponentProps<typeof Modal.Footer>;

/**
 * Type for passthrough params of INSTUI Modal components that accepts
 * properties for Modal, Modal.Body, Modal.Header, and Modal.Footer components.
 * @param Modal - Properties for the Modal component.
 * @param Body - Properties for the Body component.
 * @param Header - Properties for the Header component.
 * @param Footer - Properties for the Footer component.
 * @param 0 - Properties for the Modal component if not passed explicit Modal sub-component properties.
 */
export type ModalOptions = (modal?: ModalModalProps, body?: ModalBodyProps, header?: ModalHeaderProps, footer?: ModalFooterProps, label?: string) => void | ModalModalProps 

export type ShowModal = (modalBody: AppModalBody, modalHeader?: AppModalHeader, modalFooter?: AppModalFooter, modalOptions?: ModalOptions) => void;

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