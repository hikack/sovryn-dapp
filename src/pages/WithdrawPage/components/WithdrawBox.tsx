import { useState } from "react";
import { WithdrawBoxStep } from "../types/withdrawBoxStep.enum";
import { WithdrawForm } from "./WithdrawForm";
import { WithdrawConfirmation } from "./WithdrawConfirmation";
import { WithdrawStatus } from "./WithdrawStatus";

export const WithdrawBox: React.FC = () => {
  const [step, setStep] = useState<WithdrawBoxStep>(WithdrawBoxStep.FORM);

  return (
    <section className="bg-box-background border rounded-3xl border-box-border py-11 px-8 w-full max-w-sm flex flex-col items-center text-white">
      {step === WithdrawBoxStep.FORM && <WithdrawForm />}
      {step === WithdrawBoxStep.CONFIRMATION && <WithdrawConfirmation />}
      {step === WithdrawBoxStep.STATUS && <WithdrawStatus />}
    </section>
  );
};
