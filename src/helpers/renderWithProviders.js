import React from 'react';
import { ThemeProvider } from 'styled-components';
import UsersProvider from 'providers/UsersProvider';
import { theme } from 'assets/styles/theme';
import { render } from '@testing-library/react';

export const renderWithProviders = (children) => {
  return render(
    <ThemeProvider theme={theme}>
      <UsersProvider>{children}</UsersProvider>
    </ThemeProvider>
  );
};
