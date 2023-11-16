// Styles here include:
// Flex Basis
// Flex Direction
// Flex Wrap
// Flex
// Flex Grow
// Flex Shrink
// Order
// Grid Template Columns
// Grid Column Start / End
// Grid Template Rows
// Grid Row Start / End
// Grid Auto Flow
// Grid Auto Columns
// Grid Auto Rows
// Gap
// Justify Content
// Justify Items
// Justify Self
// Align Content
// Align Items
// Align Self
// Place Content
// Place Items
// Place Self

export interface IThemeFlexboxGrid {
  flexBoxGrid: {
    default: {
      flex: {
        1: string;
        auto: string;
        initial: string;
        none: string;
      };
      flexGrow: {
        0: string;
        default: string;
      };
      flexShrink: {
        0: string;
        default: string;
      };
    };
  };
}

export const ThemeFlexboxGridInterface: IThemeFlexboxGrid = {
  flexBoxGrid: {
    default: {
      flex: {
        1: '1 1 0%',
        auto: '1 1 auto',
        initial: '0 1 auto',
        none: 'none',
      },
      flexGrow: {
        0: '0',
        default: '1',
      },
      flexShrink: {
        0: '0',
        default: '1',
      },
    },
  },
};
