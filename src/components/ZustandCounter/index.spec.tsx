import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { useStore } from '@/zustand-store';

import { ZustandCounter } from './';

const originalState = useStore.getState();

beforeEach(() => {
  useStore.setState(originalState);
});

test('will test <ReduxCounter />', async () => {
  const user = userEvent.setup();

  render(<ZustandCounter />);

  const contentInfoElement = screen.getByRole('contentinfo');

  expect(contentInfoElement).toHaveTextContent(/0/i);

  const incrementButtonElement = screen.getByText(/increment/i);

  await user.click(incrementButtonElement);

  expect(contentInfoElement).toHaveTextContent(/1/i);
});

test('will check mock cleanups from <ZustandCounter />', async () => {
  const user = userEvent.setup();

  render(<ZustandCounter />);

  const contentInfoElement = screen.getByRole('contentinfo');

  expect(contentInfoElement).toHaveTextContent(/0/i);

  const incrementButtonElement = screen.getByText(/increment/i);

  await user.click(incrementButtonElement);

  expect(contentInfoElement).toHaveTextContent(/1/i);
});
