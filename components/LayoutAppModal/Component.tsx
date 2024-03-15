import { useAppModal } from "@/components/LayoutAppModal/Context";
import { Modal, Flex, CloseButton, Heading, View } from "@instructure/ui";

/**
 * Function to render the application Modal.
 */
function LayoutAppModal(): JSX.Element {

	const {
		showModal,
		ModalIsOpen,
		ModalContent,
		ModalTitle,
		hideModal,
		label,
		clearModal,
		toggleModal,
		...ModalProps
	} = useAppModal();
	const ModalProps = ModalProps[0] ? ModalProps[0] : ModalProps

	/**
	 * Function to handle the click event of the close button.
	 */
	const closeModal = () => {
		hideModal();
	}

	const ModalHeader: JSX.Element =
		<Flex>
			<Flex.Item
				shouldGrow
				shouldShrink
			>
				{ModalTitle ? <Heading>{ModalTitle}</Heading> : null}
			</Flex.Item>
			<Flex.Item>
				<CloseButton
					placement="end"
					offset="small"
					onClick={closeModal}
					screenReaderLabel="Close"
				/>
			</Flex.Item>
		</Flex>


	return (
		<Modal
			open={ModalIsOpen}
			{...ModalProps}
		>
			<View as="div" padding="medium">
				{ModalHeader}
				{ModalContent}
			</View>
		</Modal>
	)
}

export default LayoutAppModal;