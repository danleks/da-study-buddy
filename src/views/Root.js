import React from 'react';
import { ThemeProvider } from 'styled-components';
import UsersList from 'components/organisms/UsersList/UsersList';
import { GlobalStyle } from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import FormField from '../components/molecules/FormField/FormField';

const Root = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <div>
          <FormField label="name" name="name" id="name" type="text" />
          <FormField label="attendance" name="attendance" id="attendance" type="text" />
          <FormField label="average" name="average" id="average" type="text" />
          <button>add</button>
        </div>
        <UsersList />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Root;
