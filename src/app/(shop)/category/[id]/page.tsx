// import { notFound } from "next/navigation";
import { initialData } from "@/src/app/seed/seed";
import { ProductGrid, Title } from "@/src/components";
import { Category } from "@/src/interfaces";

type Props = {
  params: {
    id: Category;
  };
};
export default async function CategoryPage({ params }: Props) {
  const { id } = await params;
  const seedProducts = initialData.products;
  const product = seedProducts.filter((product) => product.gender === id);
  const labels: Record<Category, string> = {
    men: "Hombres",
    women: "Mujeres",
    kid: "Niños",
    unisex: "Articulos para todos",
  };
  //  if(id === 'kid'){
  //   notFound();
  //  }
  return (
    <div>
      <Title
        title={`Productos de ${labels[id]}`}
        subTitle={`Todos los productos `}
        className="mb-2"
      />
      <ProductGrid products={product} />
    </div>
  );
}
