
"use client"

import DataTable from "../core/DataTable";
import Image from "next/image";
import { getProducts } from "@/actions/getProducts";
import screenfull from 'screenfull';
import LogoUllian from "/public/assets/logo-ullian.png"
import { useEffect, useState } from "react";

export default function HomeLayout() {

  const [data, setData] = useState([]);

  const handleFullscreenRequest = () => {
    if (screenfull.isEnabled && !screenfull.isFullscreen) {
      screenfull.request();
    } else if (screenfull.isFullscreen) {
      screenfull.exit();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const productsData = await getProducts();
      setData(productsData);
    };

    fetchData();

    const button = document.getElementById("fullscreen");

    button?.addEventListener("click", handleFullscreenRequest);

    return () => {
      document.removeEventListener("click", handleFullscreenRequest);
    };

  }, []);

  return (
    <section className="w-full min-h-screen bg-[#F58635] px-8">
      <div className=" relativew-full flex justify-center py-4 items-center">
        <h1 id="fullscreen" className="text-7xl text-white font-bold">CONGELADOS</h1>
        <div className="absolute top-4 left-8 overflow-hidden max-w-[18.75rem]">
          <Image
            alt="Ullian Logo"
            src={LogoUllian}
            className="scale-[1.05]"
          />
        </div>
      </div>
      <div className="">
        <DataTable products={data} />
      </div>
    </section>
  )
}