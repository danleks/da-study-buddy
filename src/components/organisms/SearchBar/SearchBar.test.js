import { setupServer } from 'msw/node';
import SearchBar from './SearchBar';
import { handlers } from 'mocks/handlers';
import { render, screen, fireEvent, waitFor } from 'test-utils';

const server = setupServer(...handlers);

describe('SearchBar tests', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  it('renders the component', () => {
    render(<SearchBar />);
    screen.getByText(/teacher/i);
    screen.getByPlaceholderText(/search/i);
  });
  it('displays the name when the corresponding search query is provided', async () => {
    render(<SearchBar />);
    fireEvent.change(screen.getByPlaceholderText(/search/i), { target: { value: 'manie' } });
    await screen.findByText(/beata maniecka/i);
  });
  it('hides search results when data is removed from searchbar', async () => {
    render(<SearchBar />);
    fireEvent.change(screen.getByPlaceholderText(/search/i), { target: { value: 'manie' } });
    await screen.findByText(/beata maniecka/i);
    fireEvent.change(screen.getByPlaceholderText(/search/i), { target: { value: '' } });
    await waitFor(() => {
      expect(screen.getByLabelText('results')).not.toBeVisible();
    });
  });
});
