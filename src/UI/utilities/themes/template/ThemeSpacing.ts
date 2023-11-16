// styles here include:
// Padding
// Margin
// Space Between

export interface IThemeSpacing {
  spacing: {
    default: {
      padding: number;
      paddingVertical: number;
      paddingSmall: number;
      paddingSmallVertical: number;
      gapLarge: number;
      gap: number;
      gapSmall: number;
      inputPadding: string;
    };
  };
}

export const ThemeSpacing: IThemeSpacing = {
  spacing: {
    default: {
      padding: 20,
      paddingVertical: 30,
      paddingSmall: 16,
      paddingSmallVertical: 24,
      gapLarge: 24,
      gap: 20,
      gapSmall: 16,
      inputPadding: `0px 16px`,
    },
  },
};
