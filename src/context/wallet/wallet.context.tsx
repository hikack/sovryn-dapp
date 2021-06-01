import { createContext, useContext, useMemo, useReducer } from "react";
import { weiToEthereum } from "utils/weiEthereumConverter";
import Web3 from "web3";

import { walletReducer } from "./wallet.reducer";
import { Dispatch, Getters, State } from "./wallet.types";
import { WEENUS_ADDRESS } from "config/weenusAddress";
const WEENUS_ABI = require("../../config/weenusABI.json");

declare global {
  interface Window {
    ethereum: any;
  }
}

const WalletStateContext =
  createContext<(State & Getters) | undefined>(undefined);
const WalletDispatchContext = createContext<Dispatch | undefined>(undefined);

const initialState: State = {
  web3: null,
  account: null,
  balances: {},
  weenus: null,
};

export const WalletProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(walletReducer, initialState);

  const getters = useMemo(
    () => ({ isWalletConnected: !!state.account }),
    [state]
  );

  return (
    <WalletStateContext.Provider value={{ ...state, ...getters }}>
      <WalletDispatchContext.Provider value={dispatch}>
        {children}
      </WalletDispatchContext.Provider>
    </WalletStateContext.Provider>
  );
};

export const useWalletState = () => {
  const context = useContext(WalletStateContext);
  if (context === undefined)
    throw new Error("useWalletState must be used within a GameProvider");

  return context;
};

export const useWalletDispatch = () => {
  const context = useContext(WalletDispatchContext);
  if (context === undefined)
    throw new Error("useWalletDispatch must be used within a GameProvider");

  return context;
};

export const useWallet = () =>
  [useWalletState(), useWalletDispatch()] as [State & Getters, Dispatch];

export const useWalletUtils = () => {
  const dispatch = useWalletDispatch();

  const connectToWallet = async () => {
    if (window.ethereum) {
      await window.ethereum.send("eth_requestAccounts");
      const web3 = new Web3(window.ethereum);
      const account = (await web3.eth.getAccounts())[0];
      const ethereumBalance = weiToEthereum(await web3.eth.getBalance(account));
      const weenus = await new web3.eth.Contract(WEENUS_ABI, WEENUS_ADDRESS);
      const weenusBalance = weiToEthereum(
        await weenus.methods.balanceOf(account).call()
      );

      dispatch({ type: "SET_WEB3", payload: web3 });
      dispatch({ type: "SET_ACCOUNT", payload: account });
      dispatch({ type: "SET_WEENUS", payload: weenus });
      dispatch({
        type: "SET_BALANCE",
        payload: { key: "rETH", value: ethereumBalance },
      });
      dispatch({
        type: "SET_BALANCE",
        payload: { key: "WEENUS", value: weenusBalance },
      });
    }
  };

  return {
    connectToWallet,
  };
};
