import { HeaderEngage } from "./HeaderEngage";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderProfile } from "./HeaderProfile";

export const Header: React.FC = () => {
  return (
    <header className="py-4 px-8 bg-black flex justify-between items-center">
      <HeaderLogo />
      {true ? <HeaderProfile /> : <HeaderEngage />}
    </header>
  );
};
