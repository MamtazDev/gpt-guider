import FeaturesCard from "@/components/Home/Features/FeaturesCard";
import React from "react";
import searchIcon from "@/assets/icons/searchIcon.png";
import documentIcon from "@/assets/icons/documentIcon.png";
import diagramIcon from "@/assets/icons/diagramIcon.png";
import micIcon from "@/assets/icons/micIcon.png";
import palyIcon from "@/assets/icons/palyIcon.png";
import pdfIcon from "@/assets/icons/pdfIcon.png";
import videoIcon from "@/assets/icons/videoIcon.png";
import testIcon from "@/assets/icons/testIcon.png";
import peopleIcon from "@/assets/icons/peopleIcon.png";
import Main from "@/Layouts/Main";

const featuresData = [
  {
    icon: searchIcon.src,
    title: "Browsing Plugin",
    description:
      "Search and summarize the web. Gain immediate and updated knowledge.",
    link: "/commingSoon",
  },
  {
    icon: peopleIcon.src,
    title: "GPT Prof ✨",
    description:
      "Upload your documents and let AI explain everything in detail to you.  It is like having a personal tutor at your fingertips, available at any time.",
    link: "/commingSoon",
  },
  {
    icon: pdfIcon.src,
    title: "Chat With PDF",
    description:
      "Upload a PDF files, ask questions, and get summaries. Let AI answer them.",
    link: "/commingSoon",
  },
  {
    icon: palyIcon.src,
    title: "YouTube video",
    description:
      "Transcribe and summarize YouTube videos just by providing the URL of the video.",
    link: "/dashboard",
  },
  {
    icon: diagramIcon.src,
    title: "Diagram Plugin",
    description: "Create and edit diagrams. Build mind map based on your data.",
    link: "/dashboard",
  },
  {
    icon: documentIcon.src,
    title: "Document OCR AI",
    description: "Convert scanned and handwritten PDFs into digital formats.",
    link: "/dashboard",
  },
  {
    icon: micIcon.src,
    title: "Audio Transcription ",
    description:
      "Upload an audio/MP4 file and get the transcribed text with a summary.",
    link: "/commingSoon",
  },
  {
    icon: videoIcon.src,
    title: "Video summarization",
    description: "Upload a video and get the transcribed text with a summary.",
    link: "/commingSoon",
  },
  {
    icon: testIcon.src,
    title: "Question & Answer Generator",
    description:
      "Generate diverse test questions for self assessment purposes.",
    link: "/commingSoon",
  },
];

const DashboardPage = () => {
  return (
    <section className="container py-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
        {featuresData.map((item, idx) => (
          <FeaturesCard key={idx} item={item} />
        ))}
      </div>
    </section>
  );
};

DashboardPage.PageLayout = Main;

export default DashboardPage;
