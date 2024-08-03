import { displayProductDTO } from "../interfaces/displayProductDTO";
import ProductCard from "./ProductCard";

interface infoProps {
  title: string;
  text: string;
}

interface ProductCarouselProps {
  info: infoProps;
  products: displayProductDTO[];
  onClick: (product: displayProductDTO) => void;
}

export default function ProductCarousel({
  info,
  products,
  onClick,
}: ProductCarouselProps) {
  return (
    <section className="flex w-full flex-col items-center p-4 text-primary dark:text-dark-primary">
      <h2 className="text-center text-2xl font-bold md:text-3xl">
        {info.title}
      </h2>
      <p className="pb-8 text-xl font-bold md:text-2xl">{info.text}</p>
      <div className="flex w-full overflow-x-auto">
        <div className="flex w-max gap-4 md:gap-5">
          {products.map((product: displayProductDTO) => (
            <ProductCard
              key={product._id}
              product={product}
              onClick={onClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
