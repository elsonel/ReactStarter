// styles here include:
// Blur
// Brightness
// Contrast
// Drop Shadow
// Grayscale
// Hue Rotate
// Invert
// Saturate
// Sepia
// Backdrop Blur
// Backdrop Brightness
// Backdrop Contrast
// Backdrop Grayscale
// Backdrop Hue Rotate
// Backdrop Invert
// Backdrop Opacity
// Backdrop Saturate
// Backdrop Sepia

export interface IThemeFilter {
  filter: {
    default: {
      brightness: {
        0: string;
        50: string;
        75: string;
        90: string;
        95: string;
        100: string;
        105: string;
        110: string;
        125: string;
        150: string;
        200: string;
      };
      contrast: {
        0: string;
        50: string;
        75: string;
        100: string;
        125: string;
        150: string;
        200: string;
      };
    };
    dialog: {
      backdropBlur: string;
    };
  };
}

export const ThemeFilter: IThemeFilter = {
  filter: {
    default: {
      brightness: {
        0: '0',
        50: '.5',
        75: '.75',
        90: '.9',
        95: '.95',
        100: '1',
        105: '1.05',
        110: '1.1',
        125: '1.25',
        150: '1.5',
        200: '2',
      },
      contrast: {
        0: '0',
        50: '.5',
        75: '.75',
        100: '1',
        125: '1.25',
        150: '1.5',
        200: '2',
      },
    },
    dialog: {
      backdropBlur: 'blur(10px)',
    },
  },
};
