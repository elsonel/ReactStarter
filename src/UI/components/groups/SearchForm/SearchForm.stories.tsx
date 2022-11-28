import { Meta, Story } from '@storybook/react';
import { SearchForm, ISearchFormProps } from './SearchForm';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

export default {
  title: 'Groups/SearchForm',
  component: SearchForm,
  args: {},
} as Meta;

const Template: Story<ISearchFormProps> = (args) => <SearchForm {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  ...Basic.args,
};

export const Mobile = Template.bind({});
Mobile.parameters = {
  ...Mobile.parameters,
  viewport: {
    ...MINIMAL_VIEWPORTS,
    defaultViewport: 'mobile1',
  },
};
