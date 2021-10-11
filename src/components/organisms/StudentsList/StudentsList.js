import React, { useState, useEffect } from 'react';
import { useStudents } from 'hooks/useStudents';
import { useParams } from 'react-router';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './StudentsList.styles';
import PropTypes from 'prop-types';
import { USERS_SHAPE } from 'types';
import { Title } from 'components/atoms/Title/Title';

const StudentsList = ({ handleOpenStudentDetails }) => {
  const [students, setStudents] = useState([]);
  const { id } = useParams();
  const { getStudentsByGroup } = useStudents();

  useEffect(() => {
    (async () => {
      const students = await getStudentsByGroup(id);
      setStudents(students);
    })();
  }, [getStudentsByGroup, id]);

  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {students.map((userData) => {
          return <UsersListItem onClick={() => handleOpenStudentDetails(userData.id)} key={userData.name} userData={userData} />;
        })}
      </StyledList>
    </>
  );
};

StudentsList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(USERS_SHAPE)),
};

export default StudentsList;
