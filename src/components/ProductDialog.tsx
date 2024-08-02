import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { productDTO } from "../interfaces/productDTO";
import { createProduct, updateProduct } from "../api/product";
import { useNavigate } from "react-router-dom";
import { displayProductDTO } from "../interfaces/displayProductDTO";

interface ProductDialogProps {
  openDialog: boolean;
  closeDialog: () => void;
  isEditing: boolean;
  product?: displayProductDTO;
  update?: (product: displayProductDTO) => void;
}

export default function ProductDialog({
  openDialog,
  closeDialog,
  isEditing,
  product,
  update,
}: ProductDialogProps) {
  const [name, setName] = useState<string>(
    isEditing && product ? product.name || "" : "",
  );
  const [brand, setBrand] = useState<string>(
    isEditing && product ? product.brand || "" : "",
  );
  const [price, setPrice] = useState<string>(
    isEditing && product ? (product.price ? product.price.toString() : "") : "",
  );
  const [description, setDescription] = useState<string>(
    isEditing && product ? product.description || "" : "",
  );
  const [image, setImage] = useState<string>(
    isEditing && product ? product.image || "" : "",
  );
  const [category, setCategory] = useState<string>(
    isEditing && product ? product.category || "" : "",
  );

  const { register, handleSubmit } = useForm();

  const dialogRef = useRef<HTMLDialogElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (openDialog) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }

    if (isEditing && product) {
      setName(product.name);
      setBrand(product.brand);
      setPrice(product.price ? product.price.toString() : "");
      setDescription(product.description);
      setImage(product.image);
      setCategory(product.category);
    }
  }, [openDialog, isEditing, product]);

  const onSubmit = handleSubmit(async (data) => {
    if (isEditing && product) {
      try {
        const form: productDTO = {
          name: data.name,
          brand: data.brand,
          price: parseInt(data.price),
          description: data.description,
          image: data.image,
          category: data.category,
        };

        await updateProduct(product._id || "", form);

        update!({
          ...form,
          _id: product._id,
        });

        setName("");
        setBrand("");
        setPrice("");
        setDescription("");
        setImage("");
        setCategory("");

        closeDialog();
        navigate("/admin");
      } catch (error) {
        console.log(error);
      }
      return;
    }

    try {
      const form: productDTO = {
        name: data.name,
        brand: data.brand,
        price: parseInt(data.price),
        description: data.description,
        image: data.image,
        category: data.category,
      };

      await createProduct(form);
      setName("");
      setBrand("");
      setPrice("");
      setDescription("");
      setImage("");
      setCategory("");

      closeDialog();
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <dialog
      ref={dialogRef}
      className="w-96 rounded-lg border border-neutral-400 bg-neutral-200 p-4 backdrop:bg-black/50"
    >
      <form
        action=""
        method={isEditing ? "put" : "post"}
        onSubmit={onSubmit}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            placeholder="iPhone 15 Pro"
            className="rounded-md bg-neutral-300 px-2 py-1"
            {...register("name", { required: true })}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="brand">Brand: </label>
          <input
            type="text"
            id="brand"
            placeholder="Apple"
            className="rounded-md bg-neutral-300 px-2 py-1"
            {...register("brand", { required: true })}
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="price">Price: </label>
          <input
            type="text"
            id="price"
            placeholder="999"
            className="rounded-md bg-neutral-300 px-2 py-1"
            {...register("price", { required: true })}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description">Description: </label>
          <textarea
            id="description"
            placeholder="Our most powerful cameras yet. Ultrafast chips. And USB-C."
            rows={3}
            cols={30}
            className="rounded-md bg-neutral-300 px-2 py-1"
            {...register("description", { required: true })}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label htmlFor="category">Category: </label>
          <select
            id="category"
            className="rounded-md bg-neutral-300 px-2 py-1"
            {...register("category", { required: true })}
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="phones">Phones</option>
            <option value="computers">Computers</option>
            <option value="home">Home</option>
            <option value="videogames">Videogames</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="image">Image URL: </label>
          <input
            type="text"
            id="image"
            placeholder="https://iphone-15-pro-image.png"
            className="rounded-md bg-neutral-300 px-2 py-1"
            {...register("image", { required: true })}
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="mt-6 flex gap-4">
          <button
            type="button"
            onClick={closeDialog}
            className="flex-1 rounded-md bg-danger px-2 py-1 text-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 rounded-md bg-primary px-2 py-1 text-white"
          >
            {isEditing ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </dialog>
  );
}
