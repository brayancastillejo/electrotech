import HamburgerIcon from "./icons/HamburgerIcon";
import SearchIcon from "./icons/SearchIcon";
import UserIcon from "./icons/UserIcon";

export default function Header() {
  return (
    <header className="bg-primary flex h-16 w-full gap-4 p-4">
      <HamburgerIcon />
      <h2 className="mr-auto">Electrotech</h2>
      <SearchIcon />
      <UserIcon />
    </header>
  );
}
