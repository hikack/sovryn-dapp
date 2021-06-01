import { DefaultLayout } from "layouts/DefaultLayout/DefaultLayout";
import { WithdrawPage } from "pages/WithdrawPage/WithdrawPage";
import { ContextProvider } from "context/ContextProvider";

export const App = () => {
  return (
    <ContextProvider>
      <DefaultLayout>
        <WithdrawPage />
      </DefaultLayout>
    </ContextProvider>
  );
};
