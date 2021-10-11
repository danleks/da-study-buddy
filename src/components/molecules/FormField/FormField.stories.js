import React from 'react';
import FormField from './FormField';

export default {
  title: 'Components/Molecules/FormField',
  component: FormField,
};

const Template = (args) => <FormField name="story" id="story" {...args} />;

export const Default = Template.bind({
  label: 'test',
});
