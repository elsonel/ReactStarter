// styles here include:
// Box Shadow
// Opacity
// Mix Blend Mode
// Background Blend Mode

export interface IThemeEffect {
  effect: {
    default: {
      opacity: {
        0: string;
        5: string;
        10: string;
        20: string;
        25: string;
        30: string;
        40: string;
        50: string;
        60: string;
        70: string;
        75: string;
        80: string;
        90: string;
        95: string;
        100: string;
      };
      opacityOnHover: {
        selected: string;
        unselected: string;
      };
    };
    input: {
      dropdownBoxShadow: string;
    };
  };
}

export const ThemeEffect: IThemeEffect = {
  effect: {
    default: {
      opacity: {
        0: '0',
        5: '0.05',
        10: '0.1',
        20: '0.2',
        25: '0.25',
        30: '0.3',
        40: '0.4',
        50: '0.5',
        60: '0.6',
        70: '0.7',
        75: '0.75',
        80: '0.8',
        90: '0.9',
        95: '0.95',
        100: '1',
      },
      opacityOnHover: {
        selected: '1',
        unselected: '0.7',
      },
    },
    input: {
      dropdownBoxShadow: `
        rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px
      `,
    },
  },
};
