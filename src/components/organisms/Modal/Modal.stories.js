import React from 'react';
import Modal from './Modal';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';

const mockedStudent = {
  id: '1',
  name: 'Adam Romański',
  attendance: '39%',
  average: '2.3',
  group: 'A',
  course: [
    {
      title: 'Economy and finances',
      subcourses: [
        {
          title: 'Modern Economy',
          grade: '3.4',
        },
        {
          title: 'Trade and Logistics',
          grade: '4.1',
        },
        {
          title: 'Business Philosophy',
          grade: '5.0',
        },
      ],
    },
  ],
};

export default {
  title: 'Components/Organisms/Modal',
  component: Modal,
};

const Template = (args) => (
  <Modal {...args}>
    <StudentDetails student={mockedStudent} />
  </Modal>
);

export const Student = Template.bind({});
