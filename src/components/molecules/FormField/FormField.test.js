import React from 'react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import FormField from './FormField';

it('renders FormField', () => {
  renderWithProviders(<FormField label="name" name="name" id="name" />);
});
