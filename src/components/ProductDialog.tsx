import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { productDTO } from "../interfaces/productDTO";
import { createProduct } from "../api/product";
import { useNavigate } from "react-router-dom";

interface ProductDialogProps {
  openDialog: boolean;
  closeDialog: () => void;
}

export default function ProductDialog({
  openDialog,
  closeDialog,
}: ProductDialogProps) {
  const [name, setName] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const { register, handleSubmit } = useForm();

  const dialogRef = useRef<HTMLDialogElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (openDialog) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [openDialog]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      const form: productDTO = {
        name: data.name,
        brand: data.brand,
        price: parseInt(data.price),
        description: data.description,
        image: data.image,
      };

      await createProduct(form);
      setName("");
      setBrand("");
      setPrice("");
      setDescription("");
      setImage("");
      closeDialog();
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <dialog
      ref={dialogRef}
      className="w-96 rounded-lg border border-neutral-400 bg-neutral-200 p-4"
    >
      <form
        action=""
        method="post"
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
            onClick={closeDialog}
            className="bg-danger flex-1 rounded-md px-2 py-1 text-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 rounded-md bg-primary px-2 py-1 text-white"
          >
            Create
          </button>
        </div>
      </form>
    </dialog>
  );
}
