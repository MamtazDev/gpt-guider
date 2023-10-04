import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/Home/Banner/Banner";
import Features from "@/components/Home/Features/Features";
import {
  browsingPlugin,
  chatWithPdf,
  documentOcr,
  gptProf,
} from "@/utils/SectionContentDatas";
import ContentWithOutSubheder from "@/components/Home/ContentLayout/ContentWithOutSubheder";
import ContentWithSubheader from "@/components/Home/ContentLayout/ContentWithSubheader";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Banner />
      <Features />
      <ContentWithOutSubheder data={browsingPlugin} />
      <ContentWithSubheader data={gptProf} />
      <ContentWithOutSubheder data={documentOcr} />
      <ContentWithSubheader data={chatWithPdf} />
    </>
  );
}
