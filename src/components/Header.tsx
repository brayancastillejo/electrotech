import HamburgerIcon from "./icons/HamburgerIcon";
import SearchIcon from "./icons/SearchIcon";
import UserIcon from "./icons/UserIcon";
import Navbar from "./Navbar";
import ElectrotechLogo from "./logos/ElectrotechLogo";

export default function Header() {
  return (
    <header className="flex h-16 w-full items-center gap-4 bg-primary p-4 text-white">
      <HamburgerIcon />
      <ElectrotechLogo />
      <Navbar />
      <SearchIcon />
      <UserIcon />
    </header>
  );
}
