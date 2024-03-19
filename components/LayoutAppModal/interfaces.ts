import {
  ModalProps,
  ModalModalProps,
  ModalBodyProps,
  ModalHeaderProps,
  ModalFooterProps,
  AppModalBody,
  AppModalHeader,
  AppModalFooter,
  ShowModal,
} from './types';

/**
 * Interface for the App Modal context.
 * It includes methods for showing, hiding, toggling, and clearing the modal,
 * as well as the state of the modal (whether it's open, its content, and its title).
 */
export interface AppModalContextType {
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
}

/**
 * Interface for the options that can be passed to an INSTUI Modal.
 * 
 * @property {ModalModalProps} Modal - Optional properties for the Modal component.
 * @property {BodyProps} Body - Optional properties for the Modal.Body component.
 * @property {HeaderProps} Header - Optional properties for the Modal.Header component.
 * @property {FooterProps} Footer - Optional properties for the Modal.Footer component.
 */
export interface ModalOptions {
  modal?: ModalModalProps[];
  body?: ModalBodyProps[];
  header?: ModalHeaderProps[];
  footer?: ModalFooterProps[];
  label?: string;
}
  
  /**
   * Interface for the props of the App Modal Provider component.
   * It includes children, which are React nodes.
   */
  export interface Props {
    children: React.ReactNode;
  }