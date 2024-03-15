import { useAppTray } from "@/lib/Contexts";
import { IconInfoLine, Text } from "@instructure/ui";

function getActionItems() {

  const { showTray } = useAppTray();
  const actionItems = []


  const infoTrayContent = () => {
    return (
      <>
        <Text as="p">This site and its contents are maintained by Instructure, inc.</Text>
        <Text as="h4" weight="bold">Current customers</Text>
        <Text as="p">Reach out to your CSM</Text>
        <Text as="h4" weight="bold">Prospective customers</Text>
        <Text as="p">Reach out to your sales contact.</Text>
        <Text as="p">For general inquiries email.</Text>
      </>
    )
  }
  const infoTrayTitle = "Info"

  actionItems.push(
    {
      renderIcon: <IconInfoLine />,
      id: "info",
      color: "secondary",
      href: "#",
      onClick: () => { showTray(infoTrayContent(), infoTrayTitle) },
      children: "Info"
    })


  return actionItems
}

export default getActionItems;