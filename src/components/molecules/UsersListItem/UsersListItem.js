import React from 'react';
import PropTypes from 'prop-types';
import { InnerWrapper, Wrapper } from './UserListItem.styles';
import Average from 'components/atoms/Average/Average';
import Button from 'components/atoms/Button/Button';
import Credentials from 'components/atoms/Credentials/Credentials';

const UsersListItem = ({ deleteUser, userData: { name, average, attendance = '0' } }) => {
  return (
    <Wrapper>
      <Average average={average} />
      <InnerWrapper>
        <Credentials name={name} attendance={attendance} />
      </InnerWrapper>
      <Button onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    average: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
