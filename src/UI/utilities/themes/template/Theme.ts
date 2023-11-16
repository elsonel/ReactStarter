import { ThemeColor, IThemeColor } from './ThemeColor';
import { ThemeAsset, IThemeAsset } from './ThemeAsset';
import { IThemeLayoutInterface, ThemeLayout } from './ThemeLayout';
import { IThemeFillStroke, ThemeFillStroke } from './ThemeFillStroke';
import { IThemeAnimation, ThemeAnimation } from './ThemeAnimation';
import { IThemeBorder, ThemeBorder } from './ThemeBorder';
import { IThemeEffect, ThemeEffect } from './ThemeEffect';
import { IThemeFilter, ThemeFilter } from './ThemeFilter';
import {
  IThemeFlexboxGrid,
  ThemeFlexboxGridInterface,
} from './ThemeFlexboxGrid';
import { IThemeInteractivity, ThemeInteractivity } from './ThemeInteractivity';
import { IThemeScreen, ThemeScreen } from './ThemeScreen';
import { IThemeSizing, ThemeSizing } from './ThemeSizing';
import { IThemeSpacing, ThemeSpacing } from './ThemeSpacing';

import { IThemeTransform, ThemeTransform } from './ThemeTransform';
import { IThemeTypography, ThemeTypography } from './ThemeTypography';

export interface ThemeInterface
  extends IThemeTypography,
    IThemeColor,
    IThemeAsset,
    IThemeLayoutInterface,
    IThemeFillStroke,
    IThemeAnimation,
    IThemeBorder,
    IThemeEffect,
    IThemeFilter,
    IThemeFlexboxGrid,
    IThemeInteractivity,
    IThemeScreen,
    IThemeSizing,
    IThemeSpacing,
    IThemeTransform {}

export const Theme: ThemeInterface = {
  ...ThemeTypography,
  ...ThemeColor,
  ...ThemeAsset,
  ...ThemeLayout,
  ...ThemeFillStroke,
  ...ThemeAnimation,
  ...ThemeBorder,
  ...ThemeEffect,
  ...ThemeFilter,
  ...ThemeFlexboxGridInterface,
  ...ThemeInteractivity,
  ...ThemeScreen,
  ...ThemeSizing,
  ...ThemeSpacing,
  ...ThemeTransform,
};

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeInterface {}
  export function useTheme(): ThemeInterface;
}
