import { ModalProps, AppModalBody, AppModalHeader, AppModalFooter } from './types';

/**
 * Interface for the App Modal context.
 * It includes methods for showing, hiding, toggling, and clearing the modal,
 * as well as the state of the modal (whether it's open, its content, and its title).
 */
export interface AppModalContextType extends ModalProps {
    showModal: (body: AppModalBody, header?: AppModalHeader, footer?: AppModalFooter, ...ModalProps: ModalProps[]) => void;
    hideModal: () => void;
    toggleModal: () => void;
    clearModal: () => void;
    modalIsOpen: boolean;
    modalBody: AppModalBody;
    modalHeader: AppModalHeader | null;
    modalFooter: AppModalHeader | null;
  }
  
  /**
   * Interface for the props of the App Modal Provider component.
   * It includes children, which are React nodes.
   */
  export interface Props {
    children: React.ReactNode;
  }