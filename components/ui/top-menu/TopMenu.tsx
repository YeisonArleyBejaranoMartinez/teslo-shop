import { titleFont } from "@/confic/fonts"
import Link from "next/link"
import { IoCartOutline, IoMenuOutline, IoSearchOutline } from "react-icons/io5"


export const TopMenu = () => {
  return (
    <div className="flex px-5 justify-between items-center w-full">
        {/* logo */}
        <div className="">
            <Link href="/">
                <span className={`${titleFont.className} antialiased font-bold `}>Teslo</span>
            </Link>
            <span>Shop</span>
        </div>
        {/* center menu */}
        <div className="  sm:display-block">
            <Link className="m-2 p-2 rounded-md trancition-all hover:bg-gray-100" href="/category/men">Hombres
            </Link>
             <Link className="m-2 p-2 rounded-md trancition-all hover:bg-gray-100" href="/category/women">Mujeres
            </Link>
             <Link className="m-2 p-2 rounded-md trancition-all hover:bg-gray-100" href="/category/kid">Kids
            </Link>
        </div>
        {/* search, cart, menu */}
        <div className="flex items-center">
            <Link href="/search" >
            <IoSearchOutline className="w-8 h-8"/>
            </Link>
            <Link href="/cart" >
                <div className="relative">
                    <span className="absolute text-xs  rounded-full px-1 font-bold -top-2 right-2 bg-blue-700 text-white">5</span>
                    <IoCartOutline className="w-8 h-8"/>
                </div>
             </Link>
            <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
                menu
            </button>
        </div>
    </div>
  )

}
