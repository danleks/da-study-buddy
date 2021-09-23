import React from 'react';
import Navigation from '../../organisms/Navigation/Navigation';
import { Wrapper } from './MainTemplate.styles';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import NewsTemplate from '../NewsTemplate/NewsTemplate';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <NewsTemplate />
    </Wrapper>
  );
};

export default MainTemplate;
