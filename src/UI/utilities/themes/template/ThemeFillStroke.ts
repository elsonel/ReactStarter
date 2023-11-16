// styles here include:
// Fill
// Stroke
// Stroke Width

export interface IThemeFillStroke {
  fillStroke: {
    default: {
      strokeWidth: {
        0: string;
        1: string;
        2: string;
      };
    };
  };
}

export const ThemeFillStroke: IThemeFillStroke = {
  fillStroke: {
    default: {
      strokeWidth: {
        0: '0',
        1: '1',
        2: '2',
      },
    },
  },
};
