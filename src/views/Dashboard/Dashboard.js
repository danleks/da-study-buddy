import React, { useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { useStudents } from 'hooks/useStudents';
import { useModal } from 'hooks/useModal';
import { Title } from 'components/atoms/Title/Title';
import { Wrapper, InnerWrapper, StyledNav, StyledLink } from './Dashboard.styles';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';
import Modal from 'components/organisms/Modal/Modal';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const [currentStudent, setCurrentStudent] = useState(null);
  const { id } = useParams();
  const { getGroups, getStudentById } = useStudents();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      console.log(groups);
      setGroups(groups);
    })();
  }, [getGroups]);

  const handleOpenStudentDetails = async (id) => {
    const student = await getStudentById(id);
    setCurrentStudent(student);
    handleOpenModal();
  };

  if (!id && groups.length > 0) return <Redirect to={`group/${groups[0].id}`} />;
  return (
    <Wrapper>
      <InnerWrapper>
        <Title>Group {id}</Title>
        <StyledNav>
          {groups.map((group) => (
            <StyledLink key={group.id} to={`/group/${group.id}`}>
              {group.id}{' '}
            </StyledLink>
          ))}
        </StyledNav>
      </InnerWrapper>
      <ViewWrapper>
        <StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
        <Modal isOpen={isOpen} handleCloseModal={handleCloseModal}>
          <StudentDetails student={currentStudent} />
        </Modal>
      </ViewWrapper>
    </Wrapper>
  );
};

export default Dashboard;
