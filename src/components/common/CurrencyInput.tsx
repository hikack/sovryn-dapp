interface Props {
  value: number;
  placeholder?: string;
  currencySymbol: string;
  hasPercentSelection?: boolean;
  onChange?: (value: number) => void;
}

const precentValues = [10, 25, 50, 75, 100] as const;

export const CurrencyInput: React.FC<Props> = ({
  value,
  placeholder,
  currencySymbol,
  hasPercentSelection = true,
  onChange,
}) => {
  return (
    <>
      <div className="bg-white rounded-lg flex">
        <input
          value={value}
          type="number"
          className="bg-white text-black rounded-lg h-10 text-center font-semibold focus:outline-none flex-1"
          placeholder={placeholder}
          onChange={(e) => onChange?.(parseFloat(e.target.value))}
        />
        <span className="text-black font-semibold flex justify-center items-center pr-5">
          {currencySymbol}
        </span>
      </div>
      {hasPercentSelection && (
        <ul className="flex items-center border border-input rounded-lg mt-4 bg-input bg-opacity-5">
          {precentValues.map((precentValue, index) => (
            <li
              key={index}
              className="flex-1 flex justify-center items-center py-1 hover:bg-input hover:bg-opacity-50 cursor-pointer text-input text-sm
             border-r border-input last:border-r-0 first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg"
            >
              {precentValue}%
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
