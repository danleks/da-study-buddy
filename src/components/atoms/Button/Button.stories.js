import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';

import Button from 'components/atoms/Button/Button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'read more',
};

export const DeleteButton = Template.bind({});
DeleteButton.args = {
  label: <DeleteIcon />,
  deleteBtn: true,
};
