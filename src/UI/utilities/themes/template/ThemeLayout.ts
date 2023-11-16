// Styles that go here:
// Aspect Ratio
// Container
// Columns
// Break After
// Break Before
// Break Inside
// Box Decoration Break
// Box Sizing
// Display
// Floats
// Clear
// Isolation
// Object Fit
// Object Position
// Overflow
// Overscroll Behavior
// Position
// Top / Right / Bottom / Left
// Visibility
// Z-Index

export interface IThemeLayoutInterface {
  layout: {
    default: {
      zIndex: {
        sidebar: number;
        navBar: number;
        header: number;
        modal: number;
        tooltip: number;
      };
      objectPosition: {
        bottom: string;
        center: string;
        left: string;
        leftBottom: string;
        leftTop: string;
        right: string;
        rightBottom: string;
        rightTop: string;
        top: string;
      };
    };
  };
}

export const ThemeLayout: IThemeLayoutInterface = {
  layout: {
    default: {
      zIndex: {
        sidebar: 1,
        navBar: 2,
        header: 9997,
        modal: 9998,
        tooltip: 9999,
      },
      objectPosition: {
        bottom: 'bottom',
        center: 'center',
        left: 'left',
        leftBottom: 'left bottom',
        leftTop: 'left top',
        right: 'right',
        rightBottom: 'right bottom',
        rightTop: 'right top',
        top: 'top',
      },
    },
  },
};
