import { useEffect, useState } from "react";
import { getProducts } from "../api/product";
import { displayProductDTO } from "../interfaces/displayProductDTO";
import ProductCard from "./ProductCard";
import ProductInfo from "./ProductInfo";

interface ProductsProps {
  category: string;
}

export default function Products({ category }: ProductsProps) {
  const [products, setProducts] = useState<displayProductDTO[]>([]);
  const [selectedProduct, setSelectedProduct] =
    useState<displayProductDTO | null>(null);
  const [displayProductInfo, setDisplayProductInfo] = useState<boolean>(false);

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
            onClick={(product) => {
              setSelectedProduct(product);
              setDisplayProductInfo(true);
            }}
          />
        ))}
      <ProductInfo
        product={selectedProduct}
        display={displayProductInfo}
        setDisplay={() => setDisplayProductInfo(false)}
      />
    </section>
  );
}
