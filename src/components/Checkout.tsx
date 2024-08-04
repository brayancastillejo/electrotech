import { useContext } from "react";
import { CartItemsContext } from "../context/CartItemsContext";
import confetti from "canvas-confetti";

interface CheckoutProps {
  total: number;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export default function Checkout({ total, setMessage }: CheckoutProps) {
  const { setCartItems } = useContext(CartItemsContext) || {};

  return (
    <div className="mt-auto w-full max-w-sm px-4 dark:text-white">
      <div className="full flex items-center justify-between rounded-full bg-neutral-300 pl-4 dark:bg-neutral-700">
        <p>The total is ${total}</p>
        <button
          onClick={() => {
            if (setCartItems) {
              setCartItems([]);
              setMessage("Your purchase was succesful! 🥳");
              confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
              });
            }
          }}
          className="rounded-full bg-primary px-4 py-2 text-white"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
