import { useWalletState } from "context/wallet/wallet.context";
import { ellipseBetween } from "utils/ellipseBetween";

export const HeaderProfile = () => {
  const { account } = useWalletState();

  return (
    <div className="flex">
      <div className="flex justify-center items-center bg-dark-gray p-2 pl-4 rounded-tl-lg rounded-bl-lg">
        <p className="text-white text-sm font-semibold mr-4">
          {ellipseBetween(account!)}
        </p>
        <img width="22" src="images/profile.svg" alt="profile" />
      </div>
      <button className="bg-light-gray p-2 rounded-tr-lg rounded-br-lg focus:outline-none">
        <img width="18" src="images/exit.svg" alt="profile" />
      </button>
    </div>
  );
};
