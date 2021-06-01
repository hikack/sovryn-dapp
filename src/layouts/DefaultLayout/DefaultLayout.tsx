import { useWalletState } from "context/wallet/wallet.context";
import { Header } from "./components/Header";

export const DefaultLayout: React.FC = ({ children }) => {
  const { isWalletConnected } = useWalletState();

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 flex flex-col items-center pt-11 relative">
        {!isWalletConnected && (
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-overlay bg-opacity-60" />
        )}
        {children}
      </main>
    </div>
  );
};
