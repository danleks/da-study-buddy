import React from 'react';
import '@testing-library/jest-dom';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import AddUser from './AddUser';
import Dashboard from 'views/Dashboard/Dashboard';

describe('Form Field', () => {
  it('Renders the component', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('name'), { target: { value: 'Grażyna' } });
    fireEvent.change(screen.getByTestId('name'), { target: { value: 'Grażyna' } });
    fireEvent.change(screen.getByTestId('attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('average'), { target: { value: '4.5' } });
    fireEvent.click(screen.getByTestId('consent'));
    fireEvent.click(screen.getByText('add'));
    screen.getByText('Grażyna');
  });
});
