import { faker } from '@faker-js/faker';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { APIComponent } from './';

const nameToBeReturnedByAPI = faker.name.firstName();

const server = setupServer(
  rest.get('/api', (_, res, ctx) =>
    res(ctx.json({ name: nameToBeReturnedByAPI })),
  ),
);

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

test('renders a `<APIComponent />` component', async () => {
  const regexp = new RegExp(`name is ${nameToBeReturnedByAPI}`, 'i');

  render(<APIComponent />);

  const contentInfoElement = await waitFor(() =>
    screen.findByRole('contentinfo'),
  );

  expect(contentInfoElement).toBeInTheDocument();
  expect(contentInfoElement).toHaveTextContent(regexp);
});
