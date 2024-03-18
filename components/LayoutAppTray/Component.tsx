import { useAppTray } from "@/components/LayoutAppTray/Context";
import { Tray, Flex, CloseButton, Heading, View } from "@instructure/ui";

/**
 * Function to render the application tray.
 */
function LayoutAppTray(): JSX.Element {

  const {
    showTray,
    trayIsOpen,
    trayContent,
    trayTitle,
    hideTray,
    label,
    clearTray,
    toggleTray,
    ...trayProps
  } = useAppTray();
  const TrayProps = Object.hasOwn(trayProps, 0) ? trayProps[0] : trayProps

  /**
   * Function to handle the click event of the close button.
   */
  const closeTray = () => {
    hideTray();
  }

  const header: JSX.Element =
    <Flex>
      <Flex.Item
        shouldGrow
        shouldShrink
      >
        {trayTitle ? <Heading>{trayTitle}</Heading> : null}
      </Flex.Item>
      <Flex.Item>
        <CloseButton
          placement="end"
          offset="small"
          onClick={closeTray}
          screenReaderLabel="Close"
        />
      </Flex.Item>
    </Flex>

  const content = trayContent


  return (
    <Tray
      open={trayIsOpen}
      onDismiss={closeTray}
      shouldCloseOnDocumentClick
      {...TrayProps}
    >
      <View as="div" padding="medium">
        {header}
        {content}
      </View>
    </Tray>
  )
}

export default LayoutAppTray;