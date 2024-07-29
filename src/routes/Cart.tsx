import CartItem from "../components/CartItem";
import { cartItems } from "../constants/cartItems";

export default function Cart() {
  return (
    <section className="flex w-full max-w-3xl flex-col gap-4 p-6">
      {cartItems.map((item, index) => (
        <CartItem key={item._id + index} product={item} />
      ))}
    </section>
  );
}
