import { useWalletState } from "context/wallet/wallet.context";
import { HeaderEngage } from "./HeaderEngage";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderProfile } from "./HeaderProfile";

export const Header: React.FC = () => {
  const { isWalletConnected } = useWalletState();

  return (
    <header className="py-4 px-8 bg-black flex justify-between items-center">
      <HeaderLogo />
      {isWalletConnected ? <HeaderProfile /> : <HeaderEngage />}
    </header>
  );
};
