// styles here include:
// Scale
// Rotate
// Translate
// Skew
// Transform Origin

export interface IThemeTransform {
  transform: {
    default: {
      scale: {
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
      };
      rotate: {
        0: string;
        1: string;
        2: string;
        3: string;
        6: string;
        12: string;
        45: string;
        90: string;
        180: string;
      };
      transformOrigin: {
        center: string;
        top: string;
        topRight: string;
        right: string;
        bottomRight: string;
        bottom: string;
        bottomLeft: string;
        left: string;
        topLeft: string;
      };
      skew: {
        0: string;
        1: string;
        2: string;
        3: string;
        6: string;
        12: string;
      };
    };
  };
}

export const ThemeTransform: IThemeTransform = {
  transform: {
    default: {
      scale: {
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
      },
      rotate: {
        0: '0deg',
        1: '1deg',
        2: '2deg',
        3: '3deg',
        6: '6deg',
        12: '12deg',
        45: '45deg',
        90: '90deg',
        180: '180deg',
      },
      transformOrigin: {
        center: 'center',
        top: 'top',
        topRight: 'top right',
        right: 'right',
        bottomRight: 'bottom right',
        bottom: 'bottom',
        bottomLeft: 'bottom left',
        left: 'left',
        topLeft: 'top left',
      },
      skew: {
        0: '0deg',
        1: '1deg',
        2: '2deg',
        3: '3deg',
        6: '6deg',
        12: '12deg',
      },
    },
  },
};
