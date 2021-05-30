import { Header } from "./components/Header";

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 flex flex-col items-center pt-11">
        {children}
      </main>
    </div>
  );
};
