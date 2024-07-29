import { displayProductDTO } from "../interfaces/displayProductDTO";
import CloseIcon from "./icons/CloseIcon";

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
  return (
    <aside
      className={`xs:max-w-sm absolute right-0 top-0 h-screen w-full flex-col gap-4 bg-white p-4 ${display ? "flex" : "hidden"}`}
    >
      <CloseIcon
        style="absolute top-5 right-5 bg-neutral-200 rounded-full"
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
      <button className="mt-auto rounded-md bg-primary px-2 py-1 text-white">
        Add to cart
      </button>
    </aside>
  );
}
