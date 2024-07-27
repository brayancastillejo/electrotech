import { useState, useEffect } from "react";
import ProductDialog from "../components/ProductDialog";
import ProductRecord from "../components/ProductRecord";
import { displayProductDTO } from "../interfaces/displayProductDTO";
import { getProducts } from "../api/product";

export default function Admin() {
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [products, setProducts] = useState<displayProductDTO[]>([]);

  const fetchProducts = async () => {
    const response = await getProducts();
    setProducts(response);
  };

  const updateProductInList = (updatedProduct: displayProductDTO) => {
    setProducts(
      products.map((product) =>
        product._id === updatedProduct._id ? updatedProduct : product,
      ),
    );
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="flex w-full max-w-3xl flex-col items-end gap-4 p-4">
      <button
        onClick={() => {
          setShowDialog(true);
        }}
        className="w-fit rounded-lg bg-primary px-4 py-2 text-white"
      >
        Create product
      </button>

      {products.map((product: displayProductDTO) => {
        return (
          <ProductRecord
            key={product._id}
            product={product}
            update={updateProductInList}
          />
        );
      })}
      <ProductDialog
        openDialog={showDialog}
        closeDialog={() => {
          setShowDialog(false);
        }}
        isEditing={false}
      />
    </section>
  );
}
