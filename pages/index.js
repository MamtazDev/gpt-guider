import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/Home/Banner/Banner";
import Features from "@/components/Home/Features/Features";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Banner />
      <Features />
    </>
  );
}
