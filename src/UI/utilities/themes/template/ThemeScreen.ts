// define your project's breakpoints here

export interface IThemeScreen {
  screen: {
    default: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  };
}

export const ThemeScreen: IThemeScreen = {
  screen: {
    default: {
      xs: '414px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
};
