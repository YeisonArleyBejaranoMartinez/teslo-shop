import { Title } from "@/src/components";
import { AddressForm } from "./AddressForm";
import { getCountries } from "@/src/actions";


export default async function Adress() {
 const countries = await  getCountries();
  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-72 px-10 sm:px-0">
      <div className="w-full  xl:w-250 flex flex-col justify-center text-left">
        <Title title="Dirección" subTitle="Dirección de entrega" />
        <AddressForm countries={countries} />
      </div>
    </div>
  );
}
