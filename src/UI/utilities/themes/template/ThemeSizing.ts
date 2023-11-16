// styles here include:
// Width
// Min-Width
// Max-Width
// Height
// Min-Height
// Max-Height

export interface IThemeSizing {
  sizing: {
    default: {
      inputHeight: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
      };
      iconSize: number;
    };
  };
}

export const ThemeSizing: IThemeSizing = {
  sizing: {
    default: {
      inputHeight: {
        xs: 24,
        sm: 32,
        md: 40,
        lg: 48,
      },
      iconSize: 24,
    },
  },
};
