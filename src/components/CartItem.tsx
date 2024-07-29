import { displayProductDTO } from "../interfaces/displayProductDTO";
import CloseIcon from "./icons/CloseIcon";

interface CartItemProps {
  product: displayProductDTO;
}

export default function CartItem({ product }: CartItemProps) {
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
      <div className="ml-auto flex gap-8">
        <p>{`$${product.price}`}</p>
        <CloseIcon />
      </div>
    </article>
  );
}
