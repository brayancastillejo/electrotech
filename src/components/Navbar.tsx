import { NavLink } from "react-router-dom";
import { items } from "../constants/navbarItems";

export default function Navbar() {
  return (
    <ul className="mr-auto hidden gap-2 md:flex">
      {items.map((item) => (
        <li key={crypto.randomUUID()}>
          <NavLink
            to={`/${item}`}
            className={({ isActive }) =>
              `rounded-md px-2 py-1 ${isActive ? "bg-darker-primary" : ""}`
            }
          >
            {item[0].toUpperCase() + item.slice(1)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
