interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  className?: string;
}

const Button = ({ children, onClick, type, className }: ButtonProps) => {
  return (
    <button onClick={onClick} type={type} className={` font-bold py-2 px-4 rounded ${className}`}>
      {children}
    </button>
  );
};

export default Button;
