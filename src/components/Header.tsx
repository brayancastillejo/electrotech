import HamburgerIcon from "./icons/HamburgerIcon";
import SearchIcon from "./icons/SearchIcon";
import UserIcon from "./icons/UserIcon";
import Navbar from "./Navbar";
import ElectrotechLogo from "./logos/ElectrotechLogo";
import { useState } from "react";
// import HamburgerNavigation from "./HamburgerNavigation";

export default function Header() {
  const [display, setDisplay] = useState<boolean>(false);
  console.log(setDisplay);

  return (
    <header className="flex h-16 w-full items-center gap-4 bg-primary p-4 text-white">
      <HamburgerIcon setDisplay={setDisplay} />
      <ElectrotechLogo />
      <Navbar display={display} setDisplay={setDisplay} />
      <SearchIcon />
      <UserIcon />
      {/* <HamburgerNavigation /> */}
    </header>
  );
}
