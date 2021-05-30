import { useState } from "react";
import { Label } from "components/common/Label";
import { Assets } from "components/common/Assets";
import { CurrencyInput } from "components/common/CurrencyInput";
import { TextInput } from "components/common/TextInput";
import { Button } from "components/common/Button";

export const WithdrawForm: React.FC = () => {
  const [amount, setAmount] = useState(0);
  const [receiverAddress, setReceiverAddress] = useState("");

  return (
    <>
      <h2 className="text-4xl font-extrabold mb-12">SEND</h2>

      <Label title="Asset:" className="mb-9">
        <Assets />
      </Label>

      <Label title="Amount:" className="mb-9">
        <CurrencyInput
          value={amount}
          placeholder="Type or Paste amount"
          currencySymbol="WEENUS"
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

      <Button>SUBMIT</Button>
    </>
  );
};
