import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/Home/Banner/Banner";
import Features from "@/components/Home/Features/Features";
import {
  audioVideo,
  browsingPlugin,
  chatWithPdf,
  diagramPlugin,
  documentOcr,
  gptProf,
  questionAnswer,
  youtubeVideo,
} from "@/utils/SectionContentDatas";
import ContentWithOutSubheder from "@/components/Home/ContentLayout/ContentWithOutSubheder";
import ContentWithSubheader from "@/components/Home/ContentLayout/ContentWithSubheader";
import Main from "@/Layouts/Main";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <Banner />
      <Features />
      <ContentWithOutSubheder
        data={browsingPlugin}
        classNames={"broserPluginContainer"}
      />
      <ContentWithSubheader data={gptProf} classNames={"gptProfContainer"} />
      <ContentWithOutSubheder
        data={documentOcr}
        classNames={"documentsOcrContainer"}
      />
      <ContentWithSubheader
        data={chatWithPdf}
        classNames={"chatWithPdfContainer"}
      />
      <ContentWithOutSubheder
        data={audioVideo}
        classNames={"audioVideoContainer"}
      />
      <ContentWithSubheader
        data={diagramPlugin}
        classNames={"diagramPluginContainer"}
      />
      <ContentWithOutSubheder
        data={youtubeVideo}
        classNames={"youtubeVideoContainer"}
      />
      <ContentWithOutSubheder
        data={questionAnswer}
        styles={"reverse"}
        classNames={"questionAnswerContainer"}
      />
    </>
  );
};
Home.PageLayout = Main;

export default Home;
