// styles here include:
// Border Radius
// Border Width
// Border Style
// Divide Width
// Divide Style
// Outline Width
// Outline Style
// Outline Offset
// Ring Width
// Ring Offset Width

export interface IThemeBorder {
  border: {
    default: {
      borderRadius: {
        none: string;
        default: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        full: string;
      };
    };
  };
}

export const ThemeBorder: IThemeBorder = {
  border: {
    default: {
      borderRadius: {
        none: '0px',
        default: '0.25rem',
        sm: '0.125rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
    },
  },
};
