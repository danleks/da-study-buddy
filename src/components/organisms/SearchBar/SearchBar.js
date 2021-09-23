import Input from 'components/atoms/Input/Input';
import React from 'react';
import { SearchBarWrapper, StatusInfo, LoginInfo, UserInfo } from './SearchBar.styles';

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <StatusInfo>
        <LoginInfo>Logged as:</LoginInfo>
        <UserInfo>
          <strong>Teacher</strong>
        </UserInfo>
      </StatusInfo>
      <Input />
    </SearchBarWrapper>
  );
};

export default SearchBar;
