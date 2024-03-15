import { TopNavBar, IconInstructureLogoLine, IconInfoLine } from "@instructure/ui";

import { InstUISettingsProvider } from '@instructure/emotion';
import { generateInstanceCounterMap } from '@instructure/ui-react-utils';

import getActionItems from "./ActionItems";
import themeOverrides from "./ThemeOverrides";
import { useAppTray } from "@/lib/Contexts";


function LayoutTopNavBar(): JSX.Element {

  const counter = generateInstanceCounterMap();
  counter.set('TopNavBar', 0);

  const handleDropdownMenuToggle = (isMenuOpen: boolean) => {
    const htmlEl = document.querySelector('html');
    if (!htmlEl) return;
    htmlEl.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  };

  const { showTray } = useAppTray();
  const ActionItems = getActionItems();

  return (
    <InstUISettingsProvider
      instanceCounterMap={counter}
      theme={themeOverrides}
    >
      <TopNavBar
        inverseColor
        breakpoint={684}
      >
        {() => {
          //@TODO: import data
          return (
            <TopNavBar.Layout
              id="appNav"

              smallViewportConfig={{
                dropdownMenuToggleButtonLabel: 'Toggle Menu',
                dropdownMenuLabel: 'Main Menu',
                onDropdownMenuToggle: handleDropdownMenuToggle,
              }}

              desktopConfig={{
              }}

              renderBrand={(
                <TopNavBar.Brand
                  screenReaderLabel="Instructure Compliance Packages"
                  renderIcon={(
                    <IconInstructureLogoLine
                      size="small"
                      color="primary"
                      height="2.5rem"
                      width="2.5rem"
                    />
                  )}
                />
              )}

              renderActionItems={(
                <TopNavBar.ActionItems
                  listLabel="Actions"
                  renderHiddenItemsMenuTriggerLabel={(hiddenChildrenCount) =>
                    `${hiddenChildrenCount} more actions`
                  }
                >
                  {ActionItems.map((item, index) => (
                    <TopNavBar.Item
                      variant="button"
                      key={index}
                      {...item}
                    />
                  ))}

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
