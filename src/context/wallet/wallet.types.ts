import Web3 from "web3";

export type Status = "pending" | "successfull" | "failure";

export type Dispatch = (action: Action) => void;

export type Action =
  | { type: "SET_WEB3"; payload: State["web3"] }
  | { type: "SET_ACCOUNT"; payload: State["account"] }
  | { type: "SET_WEENUS"; payload: any }
  | { type: "SET_BALANCE"; payload: { key: string; value: number } }
  | { type: "SET_STATUS"; payload: Status };

export type State = {
  web3: Web3 | null;
  account: string | null;
  balances: Record<string, number>;
  weenus: any;
  status: Status;
};

export type Getters = {
  isWalletConnected: boolean;
};
