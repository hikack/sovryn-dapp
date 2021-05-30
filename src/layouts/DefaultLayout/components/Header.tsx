import { HeaderEngage } from "./HeaderEngage";
import { HeaderLogo } from "./HeaderLogo";

export const Header: React.FC = () => {
  return (
    <header className="py-4 px-8 bg-black flex justify-between items-center">
      <HeaderLogo />
      <HeaderEngage />
    </header>
  );
};
