"use client"

import { ComponentProps } from 'react';
import React, { ReactNode, createContext, useContext, useState } from 'react';
import { Modal } from "@instructure/ui";

type ModalProps = ComponentProps<typeof Modal> & { label?: string };

/**
 * Type for the content of the App Modal.
 * It can be a JSX element, a React node, or a string.
 */
type AppModalBody = JSX.Element | ReactNode | string

/**
 * Type for the title of the App Modal.
 * It is a string.
 */
type AppModalHeader = string | null

/**
 * Type for the title of the App Modal.
 * It is a string.
 */
type AppModalFooter = string | null

/**
 * Interface for the App Modal context.
 * It includes methods for showing, hiding, toggling, and clearing the modal,
 * as well as the state of the modal (whether it's open, its content, and its title).
 */
interface AppModalContextType extends ModalProps {
  showModal: (body: AppModalBody, header?: AppModalHeader, footer?: AppModalFooter, ...ModalProps: ModalProps[]) => void;
  hideModal: () => void;
  toggleModal: () => void;
  modalIsOpen: boolean;
  modalBody: AppModalBody;
  modalHeader: AppModalHeader | null;
  modalFooter: AppModalHeader | null;
}

/**
 * Interface for the props of the App Modal Provider component.
 * It includes children, which are React nodes.
 */
interface Props {
  children: React.ReactNode;
}

/**
 * The App Modal context.
 * It is created with the AppModalContextType and is initially undefined.
 */
const AppModalContext = createContext<AppModalContextType | undefined>(undefined);

/**
 * Custom hook to use the App Modal context.
 * It throws an error if the context is not used within the App Modal Provider.
 * @returns The App Modal context.
 */
export const useAppModal = (): AppModalContextType => {
  const context = useContext(AppModalContext);
  if (!context) {
    throw new Error('useAppModal must be used within a AppModalProvider');
  }
  return context;
};

/**
 * The App Modal Provider component.
 * It provides the App Modal context to its children.
 * @param children - The children elements.
 */
export const AppModalProvider: React.FC<Props> = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalBody, setModalBody] = useState<AppModalBody>(<></>);
  const [modalHeader, setModalHeader] = useState<AppModalHeader | null>(null);
  const [modalFooter, setModalFooter] = useState<AppModalFooter | null>(null);
  const [modalProps, setModalProps] = useState<ModalProps[] | null>(null);
  const [label, setModalLabel] = useState<string>("App Modal");

  const hideModal = () => setModalIsOpen(false);
  const showModal = (
    modalBody: AppModalBody,
    modalHeader?: AppModalHeader,
    modalFooter?: AppModalFooter,
    ...modalProps: ModalProps[]
  ) => {
    console.log("modalBody: ", modalBody)
    console.log("modalHeader: ", modalHeader)
    console.log("modalFooter: ", modalFooter)
    console.log("modalProps: ", modalProps)
    setModalLabel(label)
    setModalHeader(modalHeader || null)
    setModalFooter(modalFooter || null)
    setModalBody(modalBody)
    setModalProps(modalProps)
    setModalIsOpen(true)
  };
  const toggleModal = () => setModalIsOpen(!modalIsOpen);


  return (
    <AppModalContext.Provider value={{
      showModal,
      hideModal,
      toggleModal,
      modalIsOpen,
      modalBody,
      modalHeader,
      modalFooter,
      label: "App Modal",
      ...modalProps,
      children
    }}>
      {children}
    </AppModalContext.Provider>
  );
}