import { Link } from "react-router-dom";

interface UserPopoverProps {
  display: boolean;
}

export default function UserPopover({ display }: UserPopoverProps) {
  return (
    <div
      className={`absolute right-0 top-12 flex-col gap-2 rounded-md bg-white p-4 font-bold text-black dark:bg-neutral-800 dark:text-white ${display ? "flex" : "hidden"}`}
    >
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
}
