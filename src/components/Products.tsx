import { useEffect, useState } from "react";
import { getProducts } from "../api/product";
import { displayProductDTO } from "../interfaces/displayProductDTO";
import ProductCard from "./ProductCard";

interface ProductsProps {
  category: string;
}

export default function Products({ category }: ProductsProps) {
  const [products, setProducts] = useState<displayProductDTO[]>([]);

  async function fetchProducts() {
    const response = await getProducts();
    setProducts(response);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="flex w-full max-w-7xl flex-wrap justify-center gap-4 p-6 text-primary md:gap-5">
      {products
        .filter((product) => product.category === category)
        .map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onClick={() => console.log("Product clicked")}
          />
        ))}
    </section>
  );
}
