import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Counter } from './';

test('renders a `<Counter />` component', async () => {
  const user = userEvent.setup();

  render(<Counter />);

  //   const buttonElement = screen.getByRole('button');
  const buttonElement = screen.getByText(/add one/i);
  const contentInfoElement = screen.getByRole('contentinfo');

  // initial state
  expect(contentInfoElement).toHaveTextContent(/count is 0/i);

  // firing `onClick` event of the `<button />` element
  await user.click(buttonElement);

  expect(contentInfoElement).toHaveTextContent(/count is 1/i);
});
