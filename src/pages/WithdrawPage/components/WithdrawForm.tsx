import { useState } from "react";
import { Label } from "components/common/Label";
import { Assets } from "components/common/Assets";
import { CurrencyInput } from "components/common/CurrencyInput";
import { TextInput } from "components/common/TextInput";
import { Button } from "components/common/Button";
import { Transaction } from "../types/transaction.interface";
import { useWalletState } from "context/wallet/wallet.context";

interface Props {
  onSubmit: (transaction: Omit<Transaction, "fee">) => void;
}

export const WithdrawForm: React.FC<Props> = ({ onSubmit }) => {
  const { account } = useWalletState();
  const [amount, setAmount] = useState(0);
  const [activeAsset, setActiveAsset] = useState("rETH");
  const [receiverAddress, setReceiverAddress] = useState("");

  const handleSubmit = () => {
    onSubmit({
      activeAsset,
      from: account!,
      to: receiverAddress,
      value: amount,
    });
  };

  return (
    <>
      <h2 className="text-4xl font-extrabold mb-12">SEND</h2>

      <Label title="Asset:" className="mb-9">
        <Assets activeAsset={activeAsset} setActiveAsset={setActiveAsset} />
      </Label>

      <Label title="Amount:" className="mb-9">
        <CurrencyInput
          value={amount}
          placeholder="Type or Paste amount"
          activeAsset={activeAsset}
          onChange={setAmount}
        />
      </Label>

      <Label title="Send To:" className="mb-10">
        <TextInput
          value={receiverAddress}
          placeholder="Type or Paste address"
          onChange={setReceiverAddress}
        />
      </Label>

      <Button onClick={handleSubmit} disabled={!receiverAddress || !amount}>
        SUBMIT
      </Button>
    </>
  );
};
