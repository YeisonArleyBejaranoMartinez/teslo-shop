import { QuantitySelector, Title } from "@/src/components";
import Link from "next/link";
// import { initialData } from "../seed/seed";
import { initialData } from "../../../seed/seed";
import Image from "next/image";
import async from "../../category/[id]/page";
import { redirect } from "next/dist/server/api-utils";
import clsx from "clsx";
import { IoCardOutline } from "react-icons/io5";
const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];
interface Props {
  params: {
    id: string;
  };
}
export default async function OrderID({ params }: Props) {
  const { id } = await params;
  if (!id) return;
  {
    /*TODO:verificar */
  }
  // redirect(/)
  return (
    <div className="flex justify-center items-center mb-72 pz-10 sm:px-0">
      <div className="flex flex-col w-250">
        <Title title={`Orden ${id}`} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/*carrito */}
          <div className="flex flex-col mt-5">
            <div
              className={clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  "bg-red-500": false,
                  "bg-green-500": true,
                },
              )}
            >
              <IoCardOutline className="text-3xl mr-2" size={30} />
              {/* <span>Orden Pendiente</span> */}
              <span>Orden Pagada</span>
            </div>
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
          <div className=" bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl bm-2">Direccion de entrega</h2>
            <div className="mb-10">
              <p>
                <strong>Nombre:</strong> Yeison Arley Bejarano M
              </p>
              <p>
                <strong>Telefono:</strong> 3115508154
              </p>
              <p>
                <strong>Direccion:</strong> Calle 59b sur # 77c - 19
              </p>
              <p>
                <strong>Barrio:</strong> San Isidro.
              </p>
              <p>
                <strong>Codigo postal:</strong>
                1234569.
              </p>
            </div>
            <div className="w-full h-0.5 rpuded bg-gray-200 mb-10" />
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
            <div
              className={clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  "bg-red-500": false,
                  "bg-green-500": true,
                },
              )}
            >
              <IoCardOutline className="text-3xl mr-2" size={30} />
              {/* <span>Orden Pendiente</span> */}
              <span>Orden Pagada</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
