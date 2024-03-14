import { render, fireEvent } from '@testing-library/react';
import { AppTrayProvider, useAppTray } from '@/lib/Contexts';
import { Button, View } from '@instructure/ui';
import LayoutAppTray from '@/components/LayoutAppTray/Component';

describe('AppTrayContext', () => {
  test('should open and close Tray', () => {
    const TestComponent = () => {
      const { trayIsOpen, showTray, hideTray } = useAppTray();

      return (
        <View>
          <Button data-testid="openButton" onClick={() => showTray('Test Content', 'Test Title')}>
            Open Tray
          </Button>
          <span data-testid="isOpen">{trayIsOpen.toString()}</span>
          <LayoutAppTray />
          <Button data-testid="closeButton" onClick={hideTray}>
            Close Tray
          </Button>
        </View>
      );
    };

    const { getByTestId } = render(
      <AppTrayProvider>
        <TestComponent />
      </AppTrayProvider>
    );

    const openButton = getByTestId('openButton');
    const closeButton = getByTestId('closeButton');
    const trayIsOpen = getByTestId('isOpen');

    expect(trayIsOpen.textContent).toBe('false');

    fireEvent.click(openButton);

    expect(trayIsOpen.textContent).toBe('true');

    fireEvent.click(closeButton);

    expect(trayIsOpen.textContent).toBe('false');
  });
});
