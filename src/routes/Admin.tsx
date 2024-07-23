import { useState } from "react";
import ProductDialog from "../components/ProductDialog";
import ProductRecord from "../components/ProductRecord";

export default function Admin() {
  const [showDialog, setShowDialog] = useState<boolean>(false);

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
      <ProductRecord />
      <ProductDialog
        openDialog={showDialog}
        closeDialog={() => {
          setShowDialog(false);
        }}
      />
    </section>
  );
}
