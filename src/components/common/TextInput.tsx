interface Props {
  value: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export const TextInput: React.FC<Props> = ({
  value,
  placeholder,
  onChange,
}) => {
  return (
    <input
      value={value}
      type="text"
      className="bg-white text-black rounded-lg h-10 text-center font-semibold focus:outline-none"
      placeholder={placeholder}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
};
