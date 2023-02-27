import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ButtonWrapper } from './';

test('renders a `<ButtonWrapper />` component', async () => {
  const user = userEvent.setup();

  const textContent = faker.lorem.sentences();
  const onClickHandler = jest.fn();

  render(<ButtonWrapper content={textContent} onClick={onClickHandler} />);

  const buttonElement = screen.getByRole('button');
  //   const buttonElement = screen.getByText(textContent);

  expect(buttonElement).toHaveTextContent(textContent);

  // triggering `onClick` event
  await user.click(buttonElement);

  expect(onClickHandler).toHaveBeenCalledTimes(1);
});
