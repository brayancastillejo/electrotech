import ProductRecord from "../components/ProductRecord";

export default function Admin() {

  return (
    <section className="flex w-full max-w-3xl flex-col items-end gap-4 p-4">
      <button className="w-fit rounded-lg bg-primary px-4 py-2 text-white">
        Create product
      </button>
      <ProductRecord />
    </section>
  );
}
