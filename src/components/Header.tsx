import HamburgerIcon from "./icons/HamburgerIcon";
import SearchIcon from "./icons/SearchIcon";
import UserIcon from "./icons/UserIcon";
import Navbar from "./Navbar";
import ElectrotechLogo from "./logos/ElectrotechLogo";
import { useState } from "react";
import UserPopover from "./UserPopover";
import CartIcon from "./icons/CartIcon";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [display, setDisplay] = useState<boolean>(false);
  const [displayPopover, setDisplayPopover] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <header className="flex h-16 w-full items-center gap-4 bg-primary p-4 text-white">
      <HamburgerIcon setDisplay={setDisplay} />
      <ElectrotechLogo style="mr-auto" />
      <Navbar display={display} setDisplay={setDisplay} />
      <SearchIcon
        onClick={() => {
          navigate("/search");
        }}
      />
      <CartIcon
        onClick={() => {
          navigate("/cart");
        }}
      />
      <UserIcon display={displayPopover} setDisplay={setDisplayPopover} />
      <UserPopover display={displayPopover} />
    </header>
  );
}
