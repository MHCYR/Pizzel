interface InputProps {
  id: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  label: string;
  type?: string;
  className?: string;
}

const Input = ({ id, onChange, value, label, type, className }: InputProps) => {
  return (
    <div className={className}>
      <input onChange={onChange} value={value} id={id} type={type} className="block w-full rounded h-7" />
      <label htmlFor={id} className="block w-full ml-1 mt-1">
        {label}
      </label>
    </div>
  );
};

export default Input;
