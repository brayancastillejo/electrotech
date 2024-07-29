import { getProducts } from "../api/product";
import { useEffect, useState } from "react";
import { displayProductDTO } from "../interfaces/displayProductDTO";
import ProductCarousel from "../components/ProductCarousel";
import {
  computerCarousel,
  homeCarousel,
  phoneCarousel,
  videogameCarousel,
} from "../constants/carouselProducts";
import ProductInfo from "../components/ProductInfo";

export default function Index() {
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
    <>
      <main className="flex w-full max-w-7xl flex-col p-6">
        <ProductCarousel
          info={phoneCarousel}
          products={products.filter((product) => product.category === "phones")}
          onClick={(product) => {
            setSelectedProduct(product);
            setDisplayProductInfo(true);
          }}
        />
        <ProductCarousel
          info={computerCarousel}
          products={products.filter(
            (product) => product.category === "computers",
          )}
          onClick={(product) => {
            setSelectedProduct(product);
            setDisplayProductInfo(true);
          }}
        />
        <ProductCarousel
          info={homeCarousel}
          products={products.filter((product) => product.category === "home")}
          onClick={(product) => {
            setSelectedProduct(product);
            setDisplayProductInfo(true);
          }}
        />
        <ProductCarousel
          info={videogameCarousel}
          products={products.filter(
            (product) => product.category === "videogames",
          )}
          onClick={(product) => {
            setSelectedProduct(product);
            setDisplayProductInfo(true);
          }}
        />
        <ProductInfo
          product={selectedProduct}
          display={displayProductInfo}
          setDisplay={() => setDisplayProductInfo(false)}
        />
      </main>
    </>
  );
}
