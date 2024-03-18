import { useAppModal } from "@/components/LayoutAppModal/Context";
import { Modal, CloseButton, Heading } from "@instructure/ui";

/**
 * Function to render the application modal.
 */
function LayoutAppModal(): JSX.Element {

  const {
    showModal,
    modalIsOpen,
    modalBody,
    modalHeader,
    modalFooter,
    hideModal,
    label,
    toggleModal,
    children,
    ...modalProps
  } = useAppModal();
  const ModalProps = Object.hasOwn(modalProps, 0) ? modalProps[0] : modalProps

  /**
   * Function to handle the click event of the close button.
   */
  const closeModal = () => {
    hideModal();
  }

  const renderCloseButton = () => {
    return (
      <CloseButton
        placement="end"
        offset="small"
        onClick={closeModal}
        screenReaderLabel="Close"
      />
    )
  }

  const body: JSX.Element = <Modal.Body>{modalBody}</Modal.Body>

  const header: JSX.Element | null = modalHeader
    ? (
      <Modal.Header>
        {renderCloseButton()}
        <Heading>
          {modalHeader}
        </Heading>
      </Modal.Header>
    )
    : null

  const footer: JSX.Element | null = modalFooter ? <Modal.Footer>{modalFooter}</Modal.Footer> : null

  return (
    <Modal
      open={modalIsOpen}
      label={label}
      onDismiss={closeModal}
      shouldCloseOnDocumentClick
      {...ModalProps}
    >
      {header}
      {body}
      {footer}
    </Modal>
  )
}

export default LayoutAppModal;