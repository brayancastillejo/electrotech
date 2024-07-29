import { NavLink } from "react-router-dom";
import { items } from "../constants/navbarItems";
import CloseIcon from "./icons/CloseIcon";
import ElectrotechLogo from "./logos/ElectrotechLogo";
import { getRole } from "../utils/auth";
import { useEffect, useState } from "react";

interface NavbarProps {
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ display, setDisplay }: NavbarProps) {
  const [navItems, setNavItems] = useState<string[]>(items);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const fetchRole = async () => {
      const role = await getRole();

      if (role != "admin") {
        const filteredItems = items.filter((item) => item !== "admin");
        setNavItems(filteredItems);
        setIsLoaded(true);
      } else {
        setIsLoaded(true);
      }
    };
    fetchRole();
  }, []);

  return (
    <nav
      className={`absolute left-0 top-0 min-h-screen min-w-72 bg-white p-4 text-black md:static md:mr-auto md:min-h-fit md:w-auto md:bg-transparent md:p-0 md:text-current ${display ? "block" : "hidden md:block"}`}
    >
      <CloseIcon
        style={"absolute right-4 md:hidden"}
        onClick={() => setDisplay(false)}
      />
      <ElectrotechLogo style="md:hidden mb-8 text-lg" />
      <ul className="flex flex-col gap-4 md:flex-row md:gap-2">
        {isLoaded &&
          navItems.map((item) => (
            <li key={crypto.randomUUID()}>
              <NavLink
                to={`/${item}`}
                className={({ isActive }) =>
                  `rounded-md px-2 py-1 ${isActive ? "bg-neutral-200 md:bg-darker-primary" : ""}`
                }
              >
                {item[0].toUpperCase() + item.slice(1)}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
}
