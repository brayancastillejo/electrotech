import HamburgerIcon from "./icons/HamburgerIcon";
import SearchIcon from "./icons/SearchIcon";
import UserIcon from "./icons/UserIcon";

export default function Header() {
  return (
    <header className="bg-primary flex">
      <HamburgerIcon />
      <h2>Electrotech</h2>
      <SearchIcon />
      <UserIcon />
    </header>
  );
}
