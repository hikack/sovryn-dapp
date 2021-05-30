import { Button } from "components/common/Button";

export const WithdrawConfirmation: React.FC = () => {
  return (
    <>
      <h3 className="text-2xl font-semibold mb-12 text-dark-white">
        Review Transaction
      </h3>
      <h4 className="text-lg font-semibold text-dark-white">SEND</h4>
      <h4 className="text-lg font-semibold mb-9 text-dark-white">
        10,000.00 WEENUS
      </h4>
      <p className="text-sm font-medium mb-8 text-dark-white">
        From: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
      </p>
      <img
        className="mb-8"
        src="images/arrow-down.svg"
        width="40"
        alt="arrow-down"
      />
      <p className="text-sm font-medium mb-8 text-dark-white">
        To: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
      </p>
      <div className="flex items-center w-full mb-9">
        <p className="text-sm font-medium flex-1 flex justify-center items-center">
          Tx Fee:
        </p>
        <p className="text-sm font-medium flex-1 flex justify-center items-center">
          0.0006 rBTC
        </p>
      </div>
      <Button>CONFIRM</Button>
    </>
  );
};
