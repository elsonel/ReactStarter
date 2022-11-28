import { Meta, Story } from '@storybook/react';
import { Theme } from 'UI/utilities/themes/Theme';
import { Image, ImageProps } from './Image';

export default {
  title: 'Atoms/Image',
  component: Image,
  args: {
    src: Theme.image.exampleLandscape,
    alt: 'image-example',
    srcSet: undefined,
    sizes: undefined,
  },
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Basic = Template.bind({});
