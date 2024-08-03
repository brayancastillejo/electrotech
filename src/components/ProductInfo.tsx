import { useContext, useState } from "react";
import { displayProductDTO } from "../interfaces/displayProductDTO";
import CloseIcon from "./icons/CloseIcon";
import { CartItemsContext } from "../context/CartItemsContext";

interface ProductInfoProps {
  product: displayProductDTO | null;
  display: boolean;
  setDisplay: () => void;
}

export default function ProductInfo({
  product,
  display,
  setDisplay,
}: ProductInfoProps) {
  const context = useContext(CartItemsContext);

  if (!display) return null;

  const [message, setMessage] = useState("Add to cart");

  return (
    <>
      <div className={`fixed inset-0 z-40 bg-black bg-opacity-50`} />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-screen w-full flex-col gap-4 bg-white p-4 text-black xs:max-w-sm dark:bg-neutral-800 dark:text-white`}
      >
        <CloseIcon
          style="absolute top-5 right-5 bg-neutral-200 dark:bg-neutral-700 rounded-full"
          size={32}
          onClick={setDisplay}
        />
        <img
          src={product?.image}
          alt={product?.name}
          className="w-full object-cover"
        />
        <h2 className="text-2xl font-bold">{product?.name}</h2>
        <p>{product?.description}</p>
        <p>{`$${product?.price}`}</p>
        <button
          onClick={() => {
            if (product) {
              context?.setCartItems([
                ...context.cartItems,
                { ...product, _id: product._id + crypto.randomUUID() },
              ]);
              setMessage("Product added to cart");
              setTimeout(() => setMessage("Add to cart"), 1000);
            }
          }}
          className="mt-auto rounded-md bg-primary px-2 py-1 text-white"
        >
          {message}
        </button>
      </aside>
    </>
  );
}
