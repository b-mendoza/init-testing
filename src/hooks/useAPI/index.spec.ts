import { faker } from '@faker-js/faker';
import { renderHook, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { useAPI } from './';

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

test('should increment', async () => {
  const { result } = renderHook(() => useAPI());

  await waitFor(() =>
    expect(result.current).toEqual({ name: nameToBeReturnedByAPI }),
  );
});
