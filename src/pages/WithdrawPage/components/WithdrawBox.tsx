import { useState } from "react";
import { WithdrawBoxStep } from "../types/withdrawBoxStep.enum";
import { WithdrawForm } from "./WithdrawForm";
import { WithdrawConfirmation } from "./WithdrawConfirmation";
import { WithdrawStatus } from "./WithdrawStatus";

export const WithdrawBox: React.FC = () => {
  const [step, setStep] = useState<WithdrawBoxStep>(WithdrawBoxStep.FORM);

  return (
    <section
      className="bg-box-background border rounded-3xl border-box-border py-11 px-8 w-full flex flex-col items-center text-white"
      style={{ maxWidth: "25rem" }}
    >
      {step === WithdrawBoxStep.FORM && <WithdrawForm />}
      {step === WithdrawBoxStep.CONFIRMATION && <WithdrawConfirmation />}
      {step === WithdrawBoxStep.STATUS && (
        <WithdrawStatus onClose={() => setStep(WithdrawBoxStep.FORM)} />
      )}
    </section>
  );
};
