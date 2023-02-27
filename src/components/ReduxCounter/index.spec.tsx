import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider as ReactReduxProvider } from 'react-redux';

import { createStore } from '../../redux-store';

import { ReduxCounter } from './';

test('will initially test <ReduxCounter />', async () => {
  const user = userEvent.setup();

  render(
    <ReactReduxProvider store={createStore()}>
      <ReduxCounter />
    </ReactReduxProvider>,
  );

  const contentInfoElement = screen.getByRole('contentinfo');

  expect(contentInfoElement).toHaveTextContent(/0/i);

  const incrementButtonElement = screen.getByText(/increment/i);

  await user.click(incrementButtonElement);

  expect(contentInfoElement).toHaveTextContent(/1/i);
});

test('will check mock cleanups of <ReduxCounter />', async () => {
  const user = userEvent.setup();

  render(
    <ReactReduxProvider store={createStore()}>
      <ReduxCounter />
    </ReactReduxProvider>,
  );

  const contentInfoElement = screen.getByRole('contentinfo');

  expect(contentInfoElement).toHaveTextContent(/0/i);

  const incrementButtonElement = screen.getByText(/increment/i);

  await user.click(incrementButtonElement);

  expect(contentInfoElement).toHaveTextContent(/1/i);
});
