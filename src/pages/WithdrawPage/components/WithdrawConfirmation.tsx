import { Button } from "components/common/Button";
import { Transaction } from "../types/transaction.interface";
import { formatCurrency } from "utils/formatCurrency";

interface Props {
  transaction: Transaction;
  onConfirm: () => void;
}

export const WithdrawConfirmation: React.FC<Props> = ({
  transaction: { activeAsset, from, to, value, fee },
  onConfirm,
}) => {
  return (
    <>
      <h3 className="text-2xl font-semibold mb-12 text-dark-white">
        Review Transaction
      </h3>
      <h4 className="text-lg font-semibold text-dark-white">SEND</h4>
      <h4 className="text-lg font-semibold mb-9 text-dark-white">
        {formatCurrency(value)} {activeAsset}
      </h4>
      <p className="text-sm font-medium mb-8 text-dark-white truncate max-w-sm">
        From: {from}
      </p>
      <img
        className="mb-8"
        src="images/arrow-down.svg"
        width="40"
        alt="arrow-down"
      />
      <p className="text-sm font-medium mb-8 text-dark-white truncate max-w-sm">
        To: {to}
      </p>
      <div className="flex items-center w-full mb-9">
        <p className="text-sm font-medium flex-1 flex justify-center items-center">
          Tx Fee:
        </p>
        <p className="text-sm font-medium flex-1 flex justify-center items-center">
          {fee} {activeAsset}
        </p>
      </div>
      <Button onClick={onConfirm}>CONFIRM</Button>
    </>
  );
};
