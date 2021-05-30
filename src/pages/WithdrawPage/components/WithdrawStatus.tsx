import { Button } from "components/common/Button";

interface Props {
  onClose: () => void;
}

export const WithdrawStatus: React.FC<Props> = ({ onClose }) => {
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
        Status Pending
      </p>
      <p className="text-sm font-medium mb-10">
        Tx Hash: <span className="text-cta">0x410x4133…890x413413</span>
      </p>
      <Button onClick={onClose} variant="outline">
        CLOSE
      </Button>
    </>
  );
};
