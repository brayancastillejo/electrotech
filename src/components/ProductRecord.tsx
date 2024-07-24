import { useState } from "react";
import { displayProductDTO } from "../interfaces/displayProductDTO";
import DeleteIcon from "./icons/DeleteIcon";
import EditIcon from "./icons/EditIcon";
import ProductDialog from "./ProductDialog";

interface ProductRecordProps {
  product: displayProductDTO;
  update: (product: displayProductDTO) => void;
}

export default function ProductRecord({ product, update }: ProductRecordProps) {
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const toggleDialog = () => {
    setShowDialog(true);
  }

  return (
    <div className="flex w-full items-center gap-4 bg-neutral-300 p-4">
      <img className="size-8 rounded-full bg-neutral-700" src={product.image} alt={product.name}/>
      <p className="mr-auto">{product.name}</p>
      <EditIcon onClick={toggleDialog}/>
      <ProductDialog
        openDialog={showDialog}
        closeDialog={() => {
          setShowDialog(false);
        }}
        isEditing={true}
        product={product}
        update={update}
      />
      <DeleteIcon color="red" productId={product._id}/>
    </div>
  );
}
