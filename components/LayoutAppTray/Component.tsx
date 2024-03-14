import { useAppTray } from "@/lib/Contexts";

import { Tray, Flex, CloseButton, Heading, View } from "@instructure/ui";

function LayoutAppTray(): JSX.Element {

  const { trayIsOpen, trayContent, trayTitle, hideTray } = useAppTray();

  const handleClick = () => {
    hideTray();
  }

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
            onClick={handleClick}
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