// Styles that go here:
// Transitions & Animation
// Transition Property
// Transition Duration
// Transition Timing Function
// Transition Delay
// Animation

export interface IThemeAnimation {
  animation: {
    default: {
      transitionDuration: {
        fast: number;
        normal: number;
        slow: number;
        pulse: number;
      };
    };
  };
}

export const ThemeAnimation: IThemeAnimation = {
  animation: {
    default: {
      transitionDuration: {
        fast: 150,
        normal: 250,
        slow: 400,
        pulse: 1000,
      },
    },
  },
};
