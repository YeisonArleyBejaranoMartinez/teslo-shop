import { initialData } from "@/src/app/seed/seed";
import { QuantitySelector, SizeSelector } from "@/src/components";
import { ProductSlideShow } from "@/src/components";
import { titleFont } from "@/src/confic/fonts";
import { notFound } from "next/navigation";
import { ProductMovileSlideShow } from "../../../../components/product/slide-show/ProductMovileSlideShow";

interface Props {
  params: {
    slug: string;
  };
}
export default async function Produc({ params }: Props) {
  const { slug } = await params;
  const product = initialData.products.find((product) => product.slug === slug);
  if (!product) {
    notFound();
  }
  return (
    <div className="mt-5 mb-20  grid grid-cols-1 md:grid-cols-3 gap-3">
      {/*slide Show*/}
      <div className="col-span-1 md:col-span-2 ">
        {/*movil slide show  */}
        <ProductMovileSlideShow
          className="block md:hidden"
          title={product.title}
          images={product.images}
        />
        <ProductSlideShow
          className="hidden md:block"
          title={product.title}
          images={product.images}
        />
      </div>
      {/*detalles del producto */}
      <div className="col-span-1 px-5 bg-blue-200 mb-10">
        <h1 className={`${titleFont.className} antialiased text-px font-bold`}>
          {product.title}
        </h1>
        <p className="text-log mb-5">${product.price}</p>
        {/*selector de tallas */}
        <SizeSelector
          Selectedsizes={product.sizes[0]}
          avaliableSizes={product.sizes}
        />
        {/*selector de cantidad */}
        <QuantitySelector quantity={1} />
        {/*Boton */}
        <button className="btn-primary my-5">Agregar al carrito</button>
        {/*descripcion */}
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}
