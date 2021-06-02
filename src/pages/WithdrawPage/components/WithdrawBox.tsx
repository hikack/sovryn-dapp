import { useState } from "react";
import { WithdrawBoxStep } from "../types/withdrawBoxStep.enum";
import { WithdrawForm } from "./WithdrawForm";
import { WithdrawConfirmation } from "./WithdrawConfirmation";
import { WithdrawStatus } from "./WithdrawStatus";
import { Transaction } from "../types/transaction.interface";
import { useWalletState, useWalletUtils } from "context/wallet/wallet.context";
import { ethereumToWei, weiToEthereum } from "utils/weiEthereumConverter";
import { SwitchTransition, CSSTransition } from "react-transition-group";

export const WithdrawBox: React.FC = () => {
  const [hash, setHash] = useState("");
  const { checkStatus } = useWalletUtils();
  const { web3, weenus } = useWalletState();
  const [step, setStep] = useState<WithdrawBoxStep>(WithdrawBoxStep.FORM);
  const [transaction, setTransaction] = useState<Transaction>({
    activeAsset: "",
    from: "",
    to: "",
    value: 0,
    fee: 0,
  });

  const handleFormSubmit = async ({
    activeAsset,
    from,
    to,
    value,
  }: Omit<Transaction, "fee">) => {
    let fee = 0;
    const gasPrice = await web3?.eth.getGasPrice();

    if (gasPrice !== undefined) {
      switch (activeAsset) {
        case "rETH": {
          const gasLimit = await web3?.eth.estimateGas({
            from,
            to,
            gasPrice,
          });
          if (gasLimit !== undefined)
            fee = weiToEthereum((parseFloat(gasPrice) * gasLimit).toString());
          break;
        }
        case "WEENUS": {
          const gasLimit = await weenus.methods
            .transfer(to, ethereumToWei(value))
            .estimateGas({
              to,
              gasPrice,
            });
          if (gasLimit !== undefined)
            fee = weiToEthereum((parseFloat(gasPrice) * gasLimit).toString());
          break;
        }
      }

      setTransaction({ activeAsset, from, to, value, fee });
      setStep(WithdrawBoxStep.CONFIRMATION);
    }
  };

  const handleConfirm = () => {
    const { activeAsset, from, to, value } = transaction;

    switch (activeAsset) {
      case "rETH":
        web3?.eth.sendTransaction(
          {
            from,
            to,
            value: ethereumToWei(value),
          },
          handleStatus
        );
        break;
      case "WEENUS":
        weenus.methods
          .transfer(to, ethereumToWei(value))
          .send({ from }, handleStatus);
        break;
    }
  };

  const handleStatus = (error: Error, hash: string) => {
    if (error) return;

    checkStatus(web3!, hash);
    setHash(hash);
    setStep(WithdrawBoxStep.STATUS);
  };

  return (
    <section
      className="bg-box-background border rounded-3xl border-box-border py-11 px-8 w-full flex flex-col items-center text-white"
      style={{ maxWidth: "25rem" }}
    >
      <SwitchTransition>
        <CSSTransition
          key={step}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="fade"
        >
          <div className="w-full flex flex-col items-center">
            {step === WithdrawBoxStep.FORM && (
              <WithdrawForm onSubmit={handleFormSubmit} />
            )}

            {step === WithdrawBoxStep.CONFIRMATION && (
              <WithdrawConfirmation
                transaction={transaction}
                onConfirm={handleConfirm}
              />
            )}

            {step === WithdrawBoxStep.STATUS && (
              <WithdrawStatus
                hash={hash}
                onClose={() => setStep(WithdrawBoxStep.FORM)}
              />
            )}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </section>
  );
};
