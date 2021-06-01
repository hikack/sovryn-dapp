import { useWalletUtils } from "context/wallet/wallet.context";

export const HeaderEngage = () => {
  const { connectToWallet } = useWalletUtils();

  return (
    <button
      onClick={connectToWallet}
      className=" text-cta font-medium border border-cta rounded-xl bg-cta bg-opacity-5 py-1.5 px-7 focus:outline-none"
    >
      Engage Wallet
    </button>
  );
};
