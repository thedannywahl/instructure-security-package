import { canvas, instructure } from "@instructure/ui";

const themeOverrides: Object = {
  themeOverrides: {
    canvas: {}
  },
  componentOverrides: {
    TopNavBarLayout: {
      desktopBackgroundInverse: '#F5F5F5',
      smallViewportBackgroundInverse: '#F5F5F5',
      desktopInlinePadding: '1.5rem !important', // start/end paddings override for inst-ui
    },
    TopNavBarItem: {
    },
  }
}

export default themeOverrides