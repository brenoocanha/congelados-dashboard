// import HomeLayout from "@/components/layout/HomeLayout";
import Image from "next/image";
import { useQuery } from "react-query";
import dynamic from "next/dynamic";

const HomeLayout = dynamic(() => import("@/components/layout/HomeLayout"), {
  ssr: false,
})

export default function Home() {

  return (
    <main>
      <HomeLayout />
    </main>
  );
}
