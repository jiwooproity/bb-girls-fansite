interface ButtonPropsType {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  value?: string | number;
  onClick?: (e: { target: EventTarget }) => void;
}

const Button = ({
  className,
  style,
  children,
  value,
  onClick,
}: ButtonPropsType) => {
  return (
    <button className={className} style={style} value={value} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  className: "",
  style: {},
  children: null,
  value: "",
  onClick: () => {},
};
