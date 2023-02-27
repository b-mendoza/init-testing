type ButtonWrapperProps = JSX.IntrinsicElements['button'] & {
  content: string;
};

export const ButtonWrapper = (props: ButtonWrapperProps) => {
  const { content, ...buttonProps } = props;

  return <button {...buttonProps}>{content}</button>;
};
