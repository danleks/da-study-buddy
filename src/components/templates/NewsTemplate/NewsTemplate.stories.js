import React from 'react';
import NewsTemplate from './NewsTemplate';

export default {
  title: 'Components/Templates/NewsTemplate',
  component: NewsTemplate,
};

const Template = (args) => <NewsTemplate {...args} />;

export const Success = Template.bind({});
