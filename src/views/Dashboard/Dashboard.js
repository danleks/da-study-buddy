import React from 'react';
import { Redirect, useParams } from 'react-router';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { useStudents } from 'hooks/useStudents';
import { Title } from 'components/atoms/Title/Title';
import { Wrapper, InnerWrapper, StyledNav, StyledLink } from './Dashboard.styles';

const Dashboard = () => {
  const { groups } = useStudents();
  const { id } = useParams();

  if (!id && groups.length > 0) return <Redirect to={`group/${groups[0]}`} />;
  return (
    <Wrapper>
      <InnerWrapper>
        <Title>Group {id}</Title>
        <StyledNav>
          {groups.map((group) => (
            <StyledLink key={group} to={`/group/${group}`}>
              {group}{' '}
            </StyledLink>
          ))}
        </StyledNav>
      </InnerWrapper>
      <ViewWrapper>
        <StudentsList />
      </ViewWrapper>
    </Wrapper>
  );
};

export default Dashboard;
