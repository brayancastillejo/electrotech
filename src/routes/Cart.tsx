import { useContext } from "react";
import CartItem from "../components/CartItem";
import { CartItemsContext } from "../context/CartItemsContext";

export default function Cart() {
  const { cartItems = [] } = useContext(CartItemsContext) || {};

  return (
    <section className="flex w-full max-w-3xl flex-col gap-4 p-6">
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <CartItem key={item._id + index} product={item} />
        ))
      ) : (
        <h1 className="text-center text-4xl text-neutral-300">Cart's empty</h1>
      )}
    </section>
  );
}
