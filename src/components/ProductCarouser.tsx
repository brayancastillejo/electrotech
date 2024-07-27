import { displayProductDTO } from "../interfaces/displayProductDTO";
import ProductCard from "./ProductCard";

interface infoProps {
  title: string;
  text: string;
}

interface ProductCarouselProps {
  info: infoProps;
  products: displayProductDTO[];
}

export default function ProductCarousel({
  info,
  products,
}: ProductCarouselProps) {
  return (
    <section className="flex w-full flex-col items-center bg-neutral-100 p-4 text-primary">
      <h2 className="text-center text-2xl font-bold md:text-3xl">
        {info.title}
      </h2>
      <p className="pb-8 text-xl font-bold md:text-2xl">{info.text}</p>
      <div className="flex w-full overflow-x-auto">
        <div className="flex w-max gap-4 md:gap-5">
          {products.map((product: displayProductDTO) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
