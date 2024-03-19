import { useAppModal } from "@/components/LayoutAppModal/Context";
import { Modal, CloseButton, Heading } from "@instructure/ui";

/**
 * Function to render the application modal.
 */
function LayoutAppModal(): JSX.Element {

  const {
    modalIsOpen,
    modalBody,
    modalHeader,
    modalFooter,
    hideModal,
    modalLabel,
    modalOptions,
  } = useAppModal();

  const ModalProps = modalOptions?.modal || undefined
  const ModalHeaderProps = modalOptions?.header || undefined
  const ModalBodyProps = modalOptions?.body || undefined
  const ModalFooterProps = modalOptions?.footer || undefined

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

  const body: JSX.Element = <Modal.Body
    {...ModalBodyProps}
  >
    {modalBody}
  </Modal.Body>

  const header: JSX.Element | null = modalHeader
    ? (
      <Modal.Header
        {...ModalHeaderProps}
      >
        {renderCloseButton()}
        <Heading>
          {modalHeader}
        </Heading>
      </Modal.Header>
    )
    : null

  const footer: JSX.Element | null = modalFooter
    ? (
      <Modal.Footer
        {...ModalFooterProps}
      >
        {modalFooter}
      </Modal.Footer>
    ) : null

  return (
    <Modal
      open={modalIsOpen}
      label={modalLabel}
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