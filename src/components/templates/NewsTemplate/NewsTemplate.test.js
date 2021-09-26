import React from 'react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import { screen } from '@testing-library/react';
import NewsTemplate, { query } from './NewsTemplate';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

const articles = {
  data: {
    allArticles: [
      {
        id: 1,
        title: 'test',
        category: 'test',
        content: 'test',
      },
    ],
  },
};

describe('News Section', () => {
  afterEach(() => {
    mock.reset();
  });

  it('Displays loading when fetching data and then displays articles', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(200, articles);
    renderWithProviders(<NewsTemplate />);
    await screen.findByText(/loading/i);
    await screen.findAllByText(/test/i);
  });

  it('Displays error when articles are not loaded correctly', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(500);
    renderWithProviders(<NewsTemplate />);
    await screen.findByText(/cannot/i);
  });
});
