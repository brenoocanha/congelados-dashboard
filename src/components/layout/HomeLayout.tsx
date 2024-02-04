
import DataTable from "../core/DataTable";
import Image from "next/image";
import { getProducts } from "@/actions/getProducts";

import LogoUllian from "/public/assets/logo-ullian.png"

export default async function HomeLayout() {

  const data = await getProducts();

  return (
    <section className="w-full min-h-screen bg-[#F58635] px-8">
      <div className=" relativew-full flex justify-center py-4 items-center">
        <h1 className="text-7xl text-white font-bold">CONGELADOS</h1>
        <div className="absolute top-4 left-8 overflow-hidden max-w-[18.75rem]">
          <Image
            alt="Ullian Logo"
            src={LogoUllian}
            className="scale-[1.05]"
          />
        </div>
      </div>
      <DataTable products={data} />
    </section>
  )
}