import React from 'react';
import PropTypes from 'prop-types';
import { InnerWrapper, Wrapper } from './UserListItem.styles';
import Average from 'components/atoms/Average/Average';
import Button from 'components/atoms/Button/Button';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import Credentials from 'components/atoms/Credentials/Credentials';

const UsersListItem = ({ userData: { name, average, attendance = 0 } }) => {
  return (
    <Wrapper>
      <Average average={average} />
      <InnerWrapper>
        <Credentials name={name} attendance={attendance} />
      </InnerWrapper>
      <Button>
        <DeleteIcon />
      </Button>
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
