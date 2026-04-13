type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={`py-2 px-4 bg-blue-500 rounded-lg flex gap-1 items-center ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
