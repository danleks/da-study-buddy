import React from 'react';
import { useStudents } from 'hooks/useStudents';
import { useParams } from 'react-router';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './StudentsList.styles';
import PropTypes from 'prop-types';
import { USERS_SHAPE } from 'types';
import { Title } from 'components/atoms/Title/Title';

const StudentsList = () => {
  const { id } = useParams();
  const { students } = useStudents({ id });

  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {students.map((userData) => {
          return <UsersListItem key={userData.name} userData={userData} />;
        })}
      </StyledList>
    </>
  );
};

StudentsList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(USERS_SHAPE)),
};

export default StudentsList;
