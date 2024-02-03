
import DataTable from "../core/DataTable";
import Image from "next/image";
import { getProducts } from "@/actions/getProducts";

import LogoUllian from "/public/assets/logo-ullian.png"

export default async function HomeLayout() {

  const data = await getProducts();
  console.log(data);

  return (
    <section className="w-full min-h-screen bg-[#F58635]">
      <div className=" relativew-full flex justify-center py-4 items-center">
        <h1 className="text-7xl text-white font-bold">CONGELADOS</h1>
        <div className="absolute top-4 left-4 overflow-hidden max-w-[18.75rem]">
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