import DeleteIcon from "./icons/DeleteIcon";
import EditIcon from "./icons/EditIcon";

export default function ProductRecord() {
  return (
    <div className="flex w-full items-center gap-4 bg-neutral-300 p-4">
      <div className="size-8 rounded-full bg-orange-800"></div>
      <p className="mr-auto">Product</p>
      <EditIcon />
      <DeleteIcon color="red" />
    </div>
  );
}
