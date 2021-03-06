import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { InnerWrapper, Wrapper } from './UserListItem.styles';
import Average from 'components/atoms/Average/Average';
import Button from 'components/atoms/Button/Button';
import Credentials from 'components/atoms/Credentials/Credentials';
import { USERS_SHAPE } from 'types';
import { UsersContext } from 'providers/UsersProvider';

const UsersListItem = ({ userData: { name, attendance, average = '0' }, ...props }) => {
  const { deleteUser } = useContext(UsersContext);
  return (
    <Wrapper {...props}>
      <Average average={average} />
      <InnerWrapper>
        <Credentials name={name} attendance={attendance} />
      </InnerWrapper>
      <Button deleteBtn label={<DeleteIcon />} onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape(USERS_SHAPE),
};

export default UsersListItem;
