import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, Wrapper } from './UsersList.styles';

const UsersList = () => {
  return (
    <Wrapper>
      <StyledList>
        {users.map((userData) => {
          return <UsersListItem userData={userData} />;
        })}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
