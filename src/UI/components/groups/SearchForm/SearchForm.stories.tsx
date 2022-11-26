import { Meta, Story } from '@storybook/react';
import { SearchForm, SearchFormProps } from './SearchForm';

export default {
  title: 'Groups/SearchForm',
  component: SearchForm,
  args: {},
} as Meta;

const Template: Story<SearchFormProps> = (args) => <SearchForm {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  ...Basic.args,
};
