import { ComponentProps } from 'react';
import { useAppTray } from "@/lib/Contexts";
import { TopNavBar, IconInfoLine, Text } from "@instructure/ui";

/**
 * Type definition for items in the top navigation bar.
 */
type TopNavBarItem = ComponentProps<typeof TopNavBar.Item>;

/**
 * Interface for action items in the application.
 */
export interface ActionItem extends TopNavBarItem { }

/**
 * Function to get action items for the application.
 * @returns Array of action items.
 */
function getActionItems(): ActionItem[] {

  const { showTray } = useAppTray();
  const actionItems: ActionItem[] = []

  /**
 * Content for the App Tray.
 */
  const InfoTrayContent: [JSX.Element, string] = [
    <>
      <Text as="p">This site and its contents are maintained by Instructure, inc.</Text>
      <Text as="h4" weight="bold">Current customers</Text>
      <Text as="p">Reach out to your CSM</Text>
      <Text as="h4" weight="bold">Prospective customers</Text>
      <Text as="p">Reach out to your sales contact.</Text>
      <Text as="p">For general inquiries email.</Text>
    </>
    ,
    "Info"
  ] as const

  /**
   * Information Action Item.
   */
  const Info: ActionItem = {
    renderIcon: <IconInfoLine />,
    id: "info",
    color: "secondary",
    variant: "button",
    onClick: () => { showTray(...InfoTrayContent) },
    children: "Info"
  }

  actionItems.push(Info)

  return actionItems
}

export default getActionItems;