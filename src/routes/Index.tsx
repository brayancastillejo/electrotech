import { getProducts } from "../api/product";
import { useEffect, useState } from "react";
import { displayProductDTO } from "../interfaces/displayProductDTO";
import ProductCarousel from "../components/ProductCarouser";
import {
  computerCarousel,
  homeCarousel,
  phoneCarousel,
  videogameCarousel,
} from "../constants/carouselProducts";

export default function Index() {
  const [products, setProducts] = useState<displayProductDTO[]>([]);

  async function fetchProducts() {
    const response = await getProducts();
    setProducts(response);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main className="flex w-full max-w-7xl flex-col p-6">
      <ProductCarousel
        info={phoneCarousel}
        products={products.filter((product) => product.category === "phones")}
      />
      <ProductCarousel
        info={computerCarousel}
        products={products.filter(
          (product) => product.category === "computers",
        )}
      />
      <ProductCarousel
        info={homeCarousel}
        products={products.filter((product) => product.category === "home")}
      />
      <ProductCarousel
        info={videogameCarousel}
        products={products.filter(
          (product) => product.category === "videogames",
        )}
      />
    </main>
  );
}
