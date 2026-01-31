import { QuantitySelector, Title } from "@/src/components";
import Link from "next/link";
import { initialData } from "../../seed/seed";
import Image from "next/image";
import { redirect } from "next/navigation";
const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];
export default function CartPage() {
  {
    /* TODO: falta hacer la validacion  if(productsInCart.length === 0){ */
    /*redirect("/empty");*/
  }
  return (
    <div className="flex justify-center items-center mb-72 pz-10 sm:px-0">
      <div className="flex flex-col w-250">
        <Title title="Carrito" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/*carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Agregar mas items </span>
            <Link className=" mb-5 underline" href="./">
              Continua comprando
            </Link>

            {/*Itemss*/}
            {productsInCart.map((product) => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={50}
                  alt={product.title}
                />
                <div className="">
                  <span className="text-xl">{product.title}</span>
                  <span className="text-xl">${product.price}</span>
                  <QuantitySelector quantity={3} />
                  <button className="underline mt-3">Remover</button>
                </div>
              </div>
            ))}
          </div>
          {/*checkout  resumen de la compra*/}
          <div className=" bg-white rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-2xl mb-2">Resumen de orden</h2>
            <div className="grid grid-cols-2">
              <span>No. de Productos</span>
              <span className="text-right">3 articulos</span>

              <span>Subtotal</span>
              <span className="text-right">$ 1.000.000</span>

              <span>Impuestos 15%</span>
              <span className="text-right">$ 15.000</span>

              <span className="text-2xl mt-5">Total</span>
              <span className="text-right text-2xl mt-5">$ 15.000</span>
            </div>
            <div className="mt-5  mb-1 w-full">
              <Link
                className=" btn-primary flex justify-center py-3 px-5 text-white w-full text-center mt-5"
                href="./checkout/adress"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
