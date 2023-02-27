import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';

import { Person } from './';

test('renders a `<Person />` component', () => {
  const testName = faker.name.firstName();
  const regexpToCheck = new RegExp(`name is: ${testName}`, 'i');

  render(<Person name={testName} />);

  const footerElement = screen.getByRole('contentinfo');

  expect(footerElement).toHaveTextContent(regexpToCheck);
  expect(footerElement).toHaveAttribute('role', 'contentinfo');
});
