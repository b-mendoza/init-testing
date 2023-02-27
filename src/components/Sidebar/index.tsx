type SidebarProps = {
  items: Array<{
    href: string;
    name: string;
  }>;
};

export const Sidebar = (props: SidebarProps) => {
  const { items } = props;

  return (
    <div>
      {items.map((item) => (
        <div key={item.href}>
          <a href={item.href} role="navigation">
            {item.name}
          </a>
        </div>
      ))}
    </div>
  );
};
