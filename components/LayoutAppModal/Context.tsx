"use client"
import React, { createContext, useContext, useState } from 'react';
import { ModalProps, AppModalBody, AppModalHeader, AppModalFooter } from './types';
import { AppModalContextType, Props } from './interfaces';

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
    setModalLabel(label)
    setModalHeader(modalHeader || null)
    setModalFooter(modalFooter || null)
    setModalBody(modalBody)
    setModalProps(modalProps)
    setModalIsOpen(true)
  };
  const clearModal = () => {
    setModalBody(<></>)
    setModalHeader("")
    setModalFooter("")
  }
  const toggleModal = () => setModalIsOpen(!modalIsOpen);


  return (
    <AppModalContext.Provider value={{
      showModal,
      hideModal,
      toggleModal,
      clearModal,
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