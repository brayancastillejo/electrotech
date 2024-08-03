import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getToken, removeToken } from "../utils/auth";

interface UserPopoverProps {
  display: boolean;
}

export default function UserPopover({ display }: UserPopoverProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    getToken() ? setIsAuthenticated(true) : setIsAuthenticated(false);
  }, []);

  const logout = () => {
    setIsAuthenticated(false);
    removeToken();
  };

  return (
    <div
      className={`absolute right-0 top-12 flex-col gap-2 rounded-md bg-white p-4 font-bold text-black dark:bg-neutral-800 dark:text-white ${display ? "flex" : "hidden"}`}
    >
      {isAuthenticated ? (
        <>
          <Link to="/" className="cursor-pointer text-danger" onClick={logout}>
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </div>
  );
}
