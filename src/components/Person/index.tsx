type PersonProps = {
  name: string;
};

export const Person = (props: PersonProps) => {
  const { name } = props;

  return <footer role="contentinfo">Name is: {name}</footer>;
};
