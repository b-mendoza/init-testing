import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';

import { Sidebar } from './';

test('renders a `<Sidebar />` component', () => {
  const itemsLength = 5;

  const itemList = new Array<null>(itemsLength).fill(null).map(() => ({
    href: `/${faker.internet.domainWord()}`,
    name: faker.name.fullName(),
  }));

  render(<Sidebar items={itemList} />);

  const navigationItems = screen.getAllByRole('navigation');

  expect(navigationItems).toHaveLength(itemsLength);

  const firstNavigationItem = navigationItems[0];
  const firstOriginalListItem = itemList[0];

  expect(firstNavigationItem).toHaveTextContent(
    firstOriginalListItem?.name ?? '',
  );
  expect(firstNavigationItem).toHaveAttribute(
    'href',
    firstOriginalListItem?.href ?? '',
  );
});
