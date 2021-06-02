import { DefaultLayout } from "layouts/DefaultLayout/DefaultLayout";
import { WithdrawPage } from "pages/WithdrawPage/WithdrawPage";
import { ContextProvider } from "context/ContextProvider";
import { Toaster } from "react-hot-toast";

export const App = () => {
  return (
    <ContextProvider>
      <Toaster
        position="top-left"
        toastOptions={{ duration: 4000, className: "react-hot-toast" }}
      />
      <DefaultLayout>
        <WithdrawPage />
      </DefaultLayout>
    </ContextProvider>
  );
};
