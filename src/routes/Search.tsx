import { useEffect, useState } from "react";
import { displayProductDTO } from "../interfaces/displayProductDTO";
import { searchProducts } from "../api/product";
import ProductCard from "../components/ProductCard";
import ProductInfo from "../components/ProductInfo";

export default function Search() {
  const [nameProduct, setNameProduct] = useState<string>("");
  const [products, setProducts] = useState<displayProductDTO[]>([]);
  const [selectedProduct, setSelectedProduct] =
    useState<displayProductDTO | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [displayProductInfo, setDisplayProductInfo] = useState<boolean>(false);

  useEffect(() => {
    const fecthProducts = async () => {
      setIsLoading(true);
      try {
        searchProducts(nameProduct).then((data) => {
          setProducts(data);
        });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (nameProduct) {
      fecthProducts();
    }
  }, [nameProduct]);

  return (
    <section className="flex w-full flex-col items-center">
      <input
        type="text"
        className="mt-6 w-5/6 rounded-lg border-2 border-primary px-2 py-3 md:w-1/3 dark:bg-neutral-700 dark:text-white"
        placeholder="Search for products"
        value={nameProduct}
        onChange={(e) => setNameProduct(e.target.value)}
      />
      <section className="flex w-full max-w-7xl flex-wrap justify-center gap-4 p-6 text-primary md:gap-5">
        {isLoading ? (
          <h1 className="text-center text-4xl text-neutral-300">Loading...</h1>
        ) : nameProduct != "" ? (
          products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onClick={(product) => {
                setSelectedProduct(product);
                setDisplayProductInfo(true);
              }}
            />
          ))
        ) : (
          <h1 className="text-center text-4xl text-neutral-300">
            No products found
          </h1>
        )}
      </section>
      <ProductInfo
        product={selectedProduct}
        display={displayProductInfo}
        setDisplay={() => setDisplayProductInfo(false)}
      />
    </section>
  );
}
