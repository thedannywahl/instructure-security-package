"use client"

import { ComponentProps } from 'react';
import React, { ReactNode, createContext, useContext, useState } from 'react';
import { Modal } from "@instructure/ui";

type ModalProps = ComponentProps<typeof Modal> & { label?: string };

/**
 * Type for the content of the App Modal.
 * It can be a JSX element, a React node, or a string.
 */
type AppModalContent = JSX.Element | ReactNode | string

/**
 * Type for the title of the App Modal.
 * It is a string.
 */
type AppModalTitle = string | null

/**
 * Interface for the App Modal context.
 * It includes methods for showing, hiding, toggling, and clearing the Modal,
 * as well as the state of the Modal (whether it's open, its content, and its title).
 */
interface AppModalContextType extends ModalProps {
    showModal: (content?: AppModalContent, title?: AppModalTitle, ...ModalProps: ModalProps[]) => void;
    hideModal: () => void;
    toggleModal: () => void;
    clearModal: () => void;
    ModalIsOpen: boolean;
    ModalContent: AppModalContent | null;
    ModalTitle: AppModalTitle | null;
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
    const [ModalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [ModalContent, setModalContent] = useState<AppModalContent | null>(null);
    const [ModalTitle, setModalTitle] = useState<AppModalTitle | null>(null);
    const [ModalProps, setModalProps] = useState<ModalProps[] | null>(null);
    const [label, setModalLabel] = useState<string>("App Modal");

    const hideModal = () => setModalIsOpen(false);
    const showModal = (ModalContent?: AppModalContent, ModalTitle?: AppModalTitle, ...ModalProps: ModalProps[]) => {

        console.log("label:", label)
        console.log("ModalProps:", ModalProps)

        if (ModalProps && ModalProps.length > 0) {
            ModalProps[0].label = ModalProps[0].label || label;
        }
        setModalTitle(ModalTitle || null)
        setModalLabel(ModalProps[0].label)
        setModalContent(ModalContent || null)
        setModalProps(ModalProps)
        setModalIsOpen(true)
    };
    const toggleModal = () => setModalIsOpen(!ModalIsOpen);
    const clearModal = () => {
        setModalContent(null)
        setModalTitle(null)
    }

    return (
        <AppModalContext.Provider value={{
            showModal,
            hideModal,
            toggleModal,
            clearModal,
            ModalIsOpen,
            ModalContent,
            ModalTitle,
            label: "App Modal",
            ...ModalProps
        }}>
            {children}
        </AppModalContext.Provider>
    );
}