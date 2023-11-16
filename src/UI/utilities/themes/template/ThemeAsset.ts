import { StyledIcon } from 'styled-icons/types';
import { Close } from '@styled-icons/ionicons-outline/Close';
import { Trash } from '@styled-icons/fa-solid/Trash';
import { Save } from '@styled-icons/boxicons-solid/Save';
import { AddToQueue as AddSolid } from '@styled-icons/boxicons-solid/AddToQueue';
import { ExpandMore } from '@styled-icons/material-outlined/ExpandMore';
import { ExpandLess } from '@styled-icons/material-outlined/ExpandLess';
import { ArrowLeft as BackArrow } from '@styled-icons/zondicons/ArrowLeft';
import { Mobile } from '@styled-icons/boxicons-regular/Mobile';

export type IconSVGType = string | StyledIcon;

export interface IIcon {
  default: {
    cancel: IconSVGType;
    delete: IconSVGType;
    save: IconSVGType;
    add: IconSVGType;
    expandBottom: IconSVGType;
    expandTop: IconSVGType;
    backArrow: IconSVGType;
    mobile: IconSVGType;
  };
}

export interface IImage {
  default: {
    exampleLandscape: string;
    examplePortrait: string;
    exampleSquare: string;
    exampleSmall: string;
  };
}

export interface IThemeAsset {
  icon: IIcon;
  image: IImage;
}

export const ThemeAsset: IThemeAsset = {
  icon: {
    default: {
      cancel: Close,
      delete: Trash,
      save: Save,
      add: AddSolid,
      expandBottom: ExpandMore,
      expandTop: ExpandLess,
      backArrow: BackArrow,
      mobile: Mobile,
    },
  },

  /**
   * The reference to the static directories that Storybook uses in this
   * package can be changed in main.cjs.
   *
   * There are two static directories, one that contains assets only used
   * within this package, and one that contains assets used by multiple
   * projects in the monorepo.
   *
   * Paths that begin with "assets/" are assets shared across multiple
   * projects.
   *
   * Check main.cjs for more information and if you are unsure where
   * to put your static assets!
   *
   */
  image: {
    default: {
      exampleLandscape: 'images/landscape.jpg',
      examplePortrait: 'images/portrait.jpg',
      exampleSquare: 'images/square.jpg',
      exampleSmall: 'images/small.jpg',
    },
  },
};
