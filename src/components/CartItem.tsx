import { useContext } from "react";
import { displayProductDTO } from "../interfaces/displayProductDTO";
import CloseIcon from "./icons/CloseIcon";
import { CartItemsContext } from "../context/CartItemsContext";

interface CartItemProps {
  product: displayProductDTO;
}

export default function CartItem({ product }: CartItemProps) {
  const context = useContext(CartItemsContext);

  return (
    <article className="flex items-center gap-4 bg-neutral-300 p-4">
      <img
        src={product.image}
        alt={product.name}
        className="size-8 rounded-full"
      />
      <p>{product.name}</p>
      <p>{product.brand}</p>
      <p>{product.category}</p>
      <p>{product._id}</p>
      <div className="ml-auto flex gap-8">
        <p>{`$${product.price}`}</p>
        <CloseIcon
          onClick={() =>
            context?.setCartItems(
              context.cartItems.filter((item) => item._id !== product._id),
            )
          }
        />
      </div>
    </article>
  );
}
