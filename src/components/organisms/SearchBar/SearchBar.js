import debounce from 'lodash.debounce';
import Input from 'components/atoms/Input/Input';
import { useStudents } from 'hooks/useStudents';
import React, { useState, useEffect } from 'react';
import { useCombobox } from 'downshift';
import { SearchBarWrapper, StatusInfo, LoginInfo, UserInfo, InnerWrapper, SearchResultsWrapper, SearchResultsItem } from './SearchBar.styles';

const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async ({ inputValue }) => {
    const { students } = await findStudents(inputValue);
    setMatchingStudents(students);
  }, 500);

  const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
    items: matchingStudents,
    onInputValueChange: getMatchingStudents,
  });

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <LoginInfo>Logged as:</LoginInfo>
        <UserInfo>
          <strong>Teacher</strong>
        </UserInfo>
      </StatusInfo>
      <InnerWrapper {...getComboboxProps()}>
        <Input {...getInputProps()} />
        <SearchResultsWrapper {...getMenuProps()} isVisible={isOpen && matchingStudents.length > 0}>
          {isOpen
            ? matchingStudents.map((item, index) => (
                <SearchResultsItem key={item.name} isHighlightend={highlightedIndex === index} {...getItemProps({ item, index })}>
                  {item.name}
                </SearchResultsItem>
              ))
            : null}
        </SearchResultsWrapper>
      </InnerWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
