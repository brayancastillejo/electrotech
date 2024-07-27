import { displayProductDTO } from "../interfaces/displayProductDTO";

interface ProductCardProps {
  product: displayProductDTO;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="w-36 rounded-md bg-blue-300 p-2 md:w-44">
      <img
        src={product.image}
        alt={product.name}
        className="aspect-square w-full rounded-md bg-primary object-cover"
      />
      <p>{product.name}</p>
      <p>{`$${product.price}`}</p>
    </article>
  );
}
