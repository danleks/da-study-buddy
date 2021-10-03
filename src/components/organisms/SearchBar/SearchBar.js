import debounce from 'lodash.debounce';
import Input from 'components/atoms/Input/Input';
import { useStudents } from 'hooks/useStudents';
import React, { useState, useEffect } from 'react';
import { SearchBarWrapper, StatusInfo, LoginInfo, UserInfo, InnerWrapper, SearchResultsWrapper } from './SearchBar.styles';

const SearchBar = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async () => {
    const { students } = await findStudents(searchPhrase);
    setMatchingStudents(students);
  }, 500);

  useEffect(() => {
    if (!searchPhrase) return;
    getMatchingStudents();
  }, [searchPhrase, getMatchingStudents]);

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <LoginInfo>Logged as:</LoginInfo>
        <UserInfo>
          <strong>Teacher</strong>
        </UserInfo>
      </StatusInfo>
      <InnerWrapper>
        <Input value={searchPhrase} onChange={(e) => setSearchPhrase(e.target.value)} />
        {searchPhrase && matchingStudents.length > 0 ? (
          <SearchResultsWrapper>
            {matchingStudents.map((student) => (
              <li key={student.name}>{student.name}</li>
            ))}
          </SearchResultsWrapper>
        ) : null}
      </InnerWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
