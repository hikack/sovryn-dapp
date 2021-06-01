import { Action, State } from "./wallet.types";

export const walletReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_WEB3": {
      return { ...state, web3: action.payload };
    }
    case "SET_ACCOUNT": {
      return { ...state, account: action.payload };
    }
    case "SET_WEENUS": {
      return { ...state, weenus: action.payload };
    }
    case "SET_BALANCE": {
      return {
        ...state,
        balances: {
          ...state.balances,
          [action.payload.key]: action.payload.value,
        },
      };
    }
    default:
      throw new Error("Unhandled action type");
  }
};
