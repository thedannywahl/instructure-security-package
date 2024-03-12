import { TopNavBar, IconQuestionLine } from "@instructure/ui";

import { InstUISettingsProvider } from '@instructure/emotion';
import { generateInstanceCounterMap } from '@instructure/ui-react-utils';

import ActionHelp from "./_ActionHelp";
import themeOverrides from "./_ThemeOverrides";

function LayoutTopNavBar(): JSX.Element {

  const counter = generateInstanceCounterMap()
  counter.set('TopNavBar', 0);

  return (
    <InstUISettingsProvider
      instanceCounterMap={counter}
      theme={themeOverrides}
    >
      <TopNavBar>
        {() => {
          //@TODO: import data
          return (
            <TopNavBar.Layout
              smallViewportConfig={{
                dropdownMenuToggleButtonLabel: 'Toggle Menu',
                dropdownMenuLabel: 'Main Menu',
              }}

              renderActionItems={(
                <TopNavBar.ActionItems
                  listLabel="Actions"
                  renderHiddenItemsMenuTriggerLabel={(hiddenChildrenCount) =>
                    `${hiddenChildrenCount} more actions`
                  }
                >
                  <TopNavBar.Item
                    id="info"
                    variant="icon"
                    tooltip="Info"
                    renderIcon={<IconQuestionLine />}
                    showSubmenuChevron={false}
                    customPopoverConfig={{
                      on: 'click',
                      children: <ActionHelp />
                    }}
                  >
                    Help
                  </TopNavBar.Item>
                </TopNavBar.ActionItems>
              )}
            />
          )
        }}
      </TopNavBar>
    </InstUISettingsProvider>
  );
}

export default LayoutTopNavBar;
