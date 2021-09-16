import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import PropTypes from 'prop-types';
import { USERS_SHAPE } from 'types';
import { Title } from 'components/atoms/Title/Title';

const UsersList = ({ users }) => {
  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {users.map((userData) => {
          return <UsersListItem key={userData.name} userData={userData} />;
        })}
      </StyledList>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(USERS_SHAPE)),
};

export default UsersList;
