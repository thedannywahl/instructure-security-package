"use client"

import { Button, View, Text } from "@instructure/ui";
import { useAppTray } from "@/lib/Contexts";

/**
 * Home function component
 * @returns JSX.Element
 */
function Home(): JSX.Element {

  const trayTitle = "Tray Title"
  const trayContent = <View as="div">Lorem Ipsum Sit Dolor...</View>

  const { showTray } = useAppTray()

  return (
    <>
      <Text as="p">
        Bacon ipsum dolor amet shank pork belly tail pastrami cow meatball beef ribs meatloaf
        turducken tri-tip ribeye turkey buffalo filet mignon. Frankfurter cupim bresaola shank
        chuck short ribs venison kielbasa doner andouille pork buffalo swine rump. Cupim tail cow,
        shank short ribs drumstick sausage salami leberkas frankfurter spare ribs turkey.
        Landjaeger shoulder pork loin pork belly beef ribs short loin. Frankfurter tongue boudin tri-tip
        pork chop leberkas flank venison ham chicken.
      </Text>
      <Button
        onClick={() => showTray(trayContent, trayTitle)}
        children="Show Tray"
      />
    </>

  );
}

export default Home;