import { TopNavBar, IconInstructureLogoLine } from "@instructure/ui";
import { InstUISettingsProvider } from '@instructure/emotion';
import { generateInstanceCounterMap } from '@instructure/ui-react-utils';

import getActionItems, { ActionItem } from "./ActionItems";
import themeOverrides from "./ThemeOverrides";

/**
 * Function to render the top navigation bar of the layout.
 */
function LayoutTopNavBar(): JSX.Element {

  /**
   * Instance counter map for Instructure UI components.
   */
  const counter: Map<string, number> = generateInstanceCounterMap();
  counter.set('TopNavBar', 0);

  /**
   * Function to handle the toggle of the dropdown menu.
   */
  const handleDropdownMenuToggle = (isMenuOpen: boolean) => {
    const htmlEl = document.querySelector('html');
    if (!htmlEl) return;
    htmlEl.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  };

  /**
   * TopNavBar.Item items for TopNavBar.ActionItems.
   */
  const ActionItems: ActionItem[] = getActionItems();

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
                  {ActionItems.map((item, index) => <TopNavBar.Item key={index} {...item} />)}
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
