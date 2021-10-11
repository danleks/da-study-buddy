import React from 'react';
import UsersListItem from './UsersListItem';

export default {
  title: 'Components/Molecules/UsersListItem',
  component: UsersListItem,
};

const Template = (args) => <UsersListItem {...args} />;

export const BadGrades = Template.bind({});
BadGrades.args = {
  userData: {
    name: 'alex',
    attendance: '20%',
    average: '2.0',
  },
};

export const MidGrades = Template.bind({});
MidGrades.args = {
  userData: {
    name: 'alex',
    attendance: '20%',
    average: '3.5',
  },
};

export const GoodGrades = Template.bind({});
GoodGrades.args = {
  userData: {
    name: 'alex',
    attendance: '20%',
    average: '5.0',
  },
};
