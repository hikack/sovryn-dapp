import { WalletProvider } from "./wallet/wallet.context";

export const ContextProvider: React.FC = ({ children }) => {
  return <WalletProvider>{children}</WalletProvider>;
};
