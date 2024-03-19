"use client"
import React, { createContext, useContext, useState } from 'react';
import {
  ModalProps,
  ModalModalProps,
  ModalHeaderProps,
  ModalBodyProps,
  ModalFooterProps,
  AppModalBody,
  AppModalHeader,
  AppModalFooter
} from './types';
import { AppModalContextType, ModalOptions, Props } from './interfaces';

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
  const [modalProps, setModalProps] = useState<ModalModalProps[] | ModalProps[] | undefined>(undefined);
  const [modalHeaderProps, setModalHeaderProps] = useState<ModalHeaderProps[] | undefined>(undefined);
  const [modalBodyProps, setModalBodyProps] = useState<ModalBodyProps[] | undefined>(undefined);
  const [modalFooterProps, setModalFooterProps] = useState<ModalFooterProps[] | undefined>(undefined);
  const [modalLabel, setModalLabel] = useState<string>("App Modal");

  const hideModal = () => setModalIsOpen(false);

  const clearModal = () => {
    setModalBody(<></>)
    setModalHeader("")
    setModalFooter("")
    setModalLabel("")
  }

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  const showModal = (
    modalBody: AppModalBody,
    modalHeader?: AppModalHeader,
    modalFooter?: AppModalFooter,
    modalOptions?: ModalOptions,
    modalLabel?: string
  ) => {
    setModalHeader(modalHeader || null)
    setModalFooter(modalFooter || null)
    setModalBody(modalBody)

    modalOptions
      ? modalOptions?.modal
        ? setModalProps(modalOptions?.modal)
        : setModalProps(modalOptions)
      : setModalProps(undefined)

    modalOptions?.header
      ? setModalHeaderProps(modalOptions?.header)
      : setModalHeaderProps(undefined)

    modalOptions?.body
      ? setModalBodyProps(modalOptions?.body)
      : setModalBodyProps(undefined)

    modalOptions?.footer
      ? setModalFooterProps(modalOptions?.footer)
      : setModalFooterProps(undefined)

    modalOptions?.label
      ? setModalLabel(modalOptions?.label)
      : modalOptions?.modal?.label && setModalLabel(modalOptions?.modal?.label || modalLabel)

    //setModalProps(modalOptions)
    setModalIsOpen(true)
  };


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
      modalLabel,
      modalOptions: {
        modal: modalProps,
        header: modalHeaderProps,
        body: modalBodyProps,
        footer: modalFooterProps,
      },
      children
    }}>
      {children}
    </AppModalContext.Provider>
  );
}