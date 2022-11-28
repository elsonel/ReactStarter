import { Linkedin, Github } from '@styled-icons/fa-brands/';
import { Email } from '@styled-icons/material-rounded/';
import { ChevronUpDown } from '@styled-icons/fluentui-system-regular/ChevronUpDown';
import { Close } from '@styled-icons/zondicons/Close';
import { ArrowRight } from '@styled-icons/zondicons/ArrowRight';
import { ArrowLeft } from '@styled-icons/zondicons/ArrowLeft';
import ImageLandscape from '../../assets/examples/landscape.jpg';
import ImagePortrait from '../../assets/examples/portrait.jpg';
import ImageSmall from '../../assets/examples/small.jpg';
import ImageSquare from '../../assets/examples/square.jpg';

export type IconSVGType =
  | string
  | React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;

export interface IconInterface {
  exampleIconBasic: string;
  exampleIconThin: string;
  exampleIconColored: string;
  logo: IconSVGType;
  Linkedin: IconSVGType;
  Github: IconSVGType;
  Email: IconSVGType;
  DropdownChevron: IconSVGType;
  modalClose: IconSVGType;
  modalRight: IconSVGType;
  modalLeft: IconSVGType;
}

export interface ImageInterface {
  exampleSmall: string;
  exampleSquare: string;
  exampleLandscape: string;
  examplePortrait: string;
}

export interface ThemeAssetInterface {
  icon: IconInterface;
  image: ImageInterface;
}

export const ThemeAsset: ThemeAssetInterface = {
  icon: {
    logo: '/images/logo.svg',
    exampleIconBasic: '/images/examples/logo.svg',
    exampleIconThin: '/images/examples/arrow.svg',
    exampleIconColored: '/images/examples/Photoshop.svg',
    Linkedin: Linkedin,
    Github: Github,
    Email: Email,
    DropdownChevron: ChevronUpDown,
    modalClose: Close,
    modalRight: ArrowRight,
    modalLeft: ArrowLeft,
  },
  image: {
    exampleSmall: ImageSmall,
    exampleSquare: ImageSquare,
    exampleLandscape: ImageLandscape,
    examplePortrait: ImagePortrait,
  },
};
