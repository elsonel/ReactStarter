// Font families must be imported in .storybook/preview-head.html to be used
// styles here include:
// Font Family
// Font Size
// Font Smoothing
// Font Style
// Font Weight
// Font Variant Numeric
// Letter Spacing
// Line Height
// List Style Type
// List Style Position
// Text Align
// Text Decoration
// Text Decoration Style
// Text Decoration Thickness
// Text Underline Offset
// Text Transform
// Text Overflow
// Text Indent
// Vertical Align
// Whitespace
// Word Break
// Content

export interface IBasicText {
  family: string;
  weight: {
    light: number;
    regular: number;
    medium: number;
    semiBold: number;
    bold: number;
  };
  size: {
    tiny: string;
    small: string;
    regular: string;
    large: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
  };
  wordSpacing: {
    regular: string;
  };
  lineHeight: {
    regular: string;
  };
}

export interface IThemeTypography {
  font: {
    default: IBasicText;
  };
}

export const ThemeTypography: IThemeTypography = {
  font: {
    default: {
      family: `'Quicksand', sans-serif`,
      weight: {
        light: 300,
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
      },
      size: {
        tiny: '0.7rem',
        small: '0.85rem',
        regular: '1rem',
        large: '1.12rem',
        h6: '1.2rem',
        h5: '1.3rem',
        h4: '1.4rem',
        h3: '1.6rem',
        h2: '1.8rem',
        h1: '2rem',
      },
      wordSpacing: {
        regular: '0.08rem',
      },
      lineHeight: {
        regular: '1.2',
      },
    },
  },
};
