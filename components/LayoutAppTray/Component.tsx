import { useAppTray } from "@/lib/Contexts";

import { Tray, Flex, CloseButton, Heading, View } from "@instructure/ui";


/**
 * Function to render the application tray.
 * @function LayoutAppTray
 * @returns {JSX.Element} - The application tray component.
 */
function LayoutAppTray(): JSX.Element {

  const { trayIsOpen, trayContent, trayTitle, hideTray } = useAppTray();

  /**
   * Function to handle the click event of the close button.
   * @function handleClick
   */
  const closeTray = () => {
    hideTray();
  }


  /**
   * Function to render the close button.
   * @function renderCloseButton
   * @returns {JSX.Element} - The close button component.
   */
  const renderCloseButton = () => {
    return (
      <Flex>
        <Flex.Item
          shouldGrow
          shouldShrink
        >
          <Heading>{trayTitle}</Heading>
        </Flex.Item>
        <Flex.Item>
          <CloseButton
            offset="small"
            screenReaderLabel="Close"
            onClick={closeTray}
          />
        </Flex.Item>
      </Flex>
    )
  }

  return (
    <Tray
      label="Tray"
      open={trayIsOpen}
      placement="end"
      size="small"
    >
      <View as="div" padding="medium">
        {renderCloseButton()}
        {trayContent}
      </View>
    </Tray>
  )

}

export default LayoutAppTray;