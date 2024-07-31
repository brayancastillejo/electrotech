import { useContext } from "react";
import CartItem from "../components/CartItem";
import { CartItemsContext } from "../context/CartItemsContext";

export default function Cart() {
  const context = useContext(CartItemsContext);

  return (
    <section className="flex w-full max-w-3xl flex-col gap-4 p-6">
      {context?.cartItems.map((item, index) => (
        <CartItem key={item._id + index} product={item} />
      ))}
    </section>
  );
}
