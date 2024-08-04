import { useContext, useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { CartItemsContext } from "../context/CartItemsContext";
import Checkout from "../components/Checkout";

export default function Cart() {
  const { cartItems = [] } = useContext(CartItemsContext) || {};
  const [total, setTotal] = useState<number>(
    cartItems.reduce((total, current) => total + current.price, 0),
  );
  const [message, setMessage] = useState<string>("Cart's empty");

  useEffect(() => {
    setTotal(cartItems.reduce((total, current) => total + current.price, 0));
  }, [cartItems]);

  return (
    <>
      <section className="flex w-full max-w-3xl flex-col gap-4 p-6">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <CartItem key={item._id + index} product={item} />
          ))
        ) : (
          <h1 className="text-center text-4xl text-neutral-300">{message}</h1>
        )}
      </section>
      {cartItems.length > 0 && (
        <Checkout total={total} setMessage={setMessage} />
      )}
    </>
  );
}
