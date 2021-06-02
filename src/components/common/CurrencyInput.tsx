import { useWalletState } from "context/wallet/wallet.context";
import { ChangeEvent, useEffect } from "react";

interface Props {
  value: number;
  placeholder?: string;
  activeAsset: string;
  hasPercentSelection?: boolean;
  onChange?: (value: number) => void;
}

const precentValues = [10, 25, 50, 75, 100] as const;

export const CurrencyInput: React.FC<Props> = ({
  value,
  placeholder,
  activeAsset,
  hasPercentSelection = true,
  onChange,
}) => {
  const { balances, account } = useWalletState();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = parseFloat(e.target.value);
    onChange?.(input > balances[activeAsset] ? balances[activeAsset] : input);
  };

  const handlePrecentSelect = (precentValue: number) => {
    onChange?.((balances[activeAsset] * precentValue) / 100);
  };

  useEffect(() => {
    onChange?.(0);
  }, [account, activeAsset, onChange]);

  return (
    <>
      <div className="bg-white rounded-lg flex">
        <input
          value={value}
          type="number"
          className="bg-white text-black rounded-lg h-10 text-center font-semibold focus:outline-none flex-1"
          placeholder={placeholder}
          onChange={handleChange}
        />
        <span className="text-black font-semibold flex justify-center items-center pr-5 w-24">
          {activeAsset}
        </span>
      </div>
      {hasPercentSelection && (
        <ul className="flex items-center border border-input rounded-lg mt-4 bg-input bg-opacity-5">
          {precentValues.map((precentValue, index) => (
            <li
              onClick={() => handlePrecentSelect(precentValue)}
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
