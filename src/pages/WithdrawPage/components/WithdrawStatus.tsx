import { Button } from "components/common/Button";
import { useWalletState, useWalletUtils } from "context/wallet/wallet.context";
import { ellipseBetween } from "utils/ellipseBetween";

interface Props {
  hash: string;
  onClose: () => void;
}

export const WithdrawStatus: React.FC<Props> = ({ hash, onClose }) => {
  const { status } = useWalletState();
  const { resetStatus } = useWalletUtils();

  const handleClose = () => {
    resetStatus();
    onClose();
  };

  return (
    <>
      <h3 className="text-2xl font-semibold mb-6 text-dark-white">
        Review Transaction
      </h3>
      <img
        className="mb-1"
        src="images/status-success.svg"
        width="52"
        alt="status-success"
      />
      <p className="text-lg font-light italic mb-9 text-dark-white">
        Status <span className="capitalize">{status}</span>
      </p>
      <p className="text-sm font-medium mb-10">
        Tx Hash: <span className="text-cta">{ellipseBetween(hash, 10)}</span>
      </p>
      <Button onClick={handleClose} variant="outline">
        CLOSE
      </Button>
    </>
  );
};
