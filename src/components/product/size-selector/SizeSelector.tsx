import type { Size } from "@/src/interfaces";
import clsx from "clsx";

interface Props {
  Selectedsizes: Size;
  avaliableSizes: Size[];
}
export const SizeSelector = ({ Selectedsizes, avaliableSizes }: Props) => {
  return (
    <div className="my-5 ">
      <h3 className="font-bold mb-4">Tallas disponibles</h3>
      <div className="flex">
        {avaliableSizes.map((size) => (
          <button
            key={size}
            className={clsx("mx-2 hover:underline text-lg", {
              "bg-blue-500 text-white": size === Selectedsizes,
            })}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
