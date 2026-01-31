import { ProductGrid, Title } from "@/src/components";
import { initialData } from "../seed/seed";
const products = initialData.products;

export default function Home() {
  return (
    <>
      <Title title="Tienda" subTitle="Todos los Productos" className="mb-2 " />
      <ProductGrid products={products} />
    </>
  );
}
