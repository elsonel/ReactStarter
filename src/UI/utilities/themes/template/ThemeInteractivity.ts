// styles here include:
// Appearance
// Cursor
// Pointer Events
// Resize
// Scroll Behavior
// Scroll Margin
// Scroll Padding
// Scroll Snap Align
// Scroll Snap Stop
// Scroll Snap Type
// Touch Action
// User Select
// Will Change

export interface IThemeInteractivity {
  interactivity: {
    default: {
      cursor: {
        auto: string;
        default: string;
        pointer: string;
        wait: string;
        text: string;
        move: string;
        help: string;
        none: string;
        progress: string;
        cell: string;
        crosshair: string;
        alias: string;
        copy: string;
        grab: string;
        grabbing: string;
        notAllowed: string;
      };
    };
  };
}

export const ThemeInteractivity: IThemeInteractivity = {
  interactivity: {
    default: {
      cursor: {
        auto: 'auto',
        default: 'default',
        pointer: 'pointer',
        wait: 'wait',
        text: 'text',
        move: 'move',
        help: 'help',
        none: 'none',
        progress: 'progress',
        cell: 'cell',
        crosshair: 'crosshair',
        alias: 'alias',
        copy: 'copy',
        grab: 'grab',
        grabbing: 'grabbing',
        notAllowed: 'not-allowed',
      },
    },
  },
};
