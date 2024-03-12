import { View, Heading } from "@instructure/ui";

function ActionHelp(): React.ReactNode {
  return (
    <View
      as="div"
      padding="medium"
      width="25rem"
      role="dialog"
      tabIndex={0}
      aria-label="Contact"
      position="relative"
      borderRadius="small"
    >
      <Heading level="h3">Contact</Heading>
    </View>
  )
}

export default ActionHelp;