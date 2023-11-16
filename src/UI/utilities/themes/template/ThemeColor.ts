// customize the default color palette for your project here

export interface IThemeColor {
  color: {
    default: {
      hoverEffects: {
        lightenBackground: string;
      };
    };
    web: {
      default: {
        primary: string;
        alert: {
          error: string;
          warning: string;
          success: string;
        };
      };
      scrollbar: {
        light: string;
        dark: string;
      };
      background: {
        900: string;
        800: string;
        700: string;
        600: string;
        500: string;
        400: string;
        300: string;
        200: string;
        base: string;
        elevated: string;
        elevated2: string;
      };
      input: {
        border: string;
      };
      text: {
        default: string;
        light: string;
        neutral: string;
        expenses: string;
        income: string;
        link: string;
        error: string;
      };
      dialog: {
        background: string;
        border: string;
        backdrop: string;
        text: string;
      };
    };
  };
}

export const ThemeColor: IThemeColor = {
  color: {
    default: {
      hoverEffects: {
        lightenBackground: 'rgba(255, 255, 255, 0.1)',
      },
    },
    web: {
      default: {
        primary: '#e5a303',
        alert: {
          error: '#ad2b2b',
          warning: '#b45f15',
          success: '#06773f',
        },
      },
      scrollbar: {
        light: '#AD97C2',
        dark: `rgba(0, 0, 0, 0.3)`,
      },
      background: {
        900: '#8db8e0',

        800: '#8db8e0',

        700: '#8db8e0',

        600: '#8db8e0',

        500: '#8db8e0',

        400: '#8db8e0',

        300: '#8db8e0',

        200: '#8db8e0',
        base: '#ffffff',
        elevated: '#fcf9f0',
        elevated2: '#fff7e3',
      },
      input: {
        border: '#a1a1a1',
      },
      text: {
        default: '#303030',
        light: '#a0b3bd',
        neutral: '#877b94',
        expenses: '#f54242',
        income: '#32a852',
        link: '#e5a303',
        error: '#FF3E41',
      },

      dialog: {
        background: '#171717d9',
        border: '#171923',
        backdrop: '#000000',
        text: 'white',
      },
    },
  },
};
