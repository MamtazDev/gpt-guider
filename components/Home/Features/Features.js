import React from "react";
import searchIcon from "../../../assets/icons/searchIcon.png";
import documentIcon from "../../../assets/icons/documentIcon.png";
import diagramIcon from "../../../assets/icons/diagramIcon.png";
import micIcon from "../../../assets/icons/micIcon.png";
import palyIcon from "../../../assets/icons/palyIcon.png";
import pdfIcon from "../../../assets/icons/pdfIcon.png";
import videoIcon from "../../../assets/icons/videoIcon.png";
import testIcon from "../../../assets/icons/testIcon.png";
import peopleIcon from "../../../assets/icons/peopleIcon.png";
import FeaturesCard from "./FeaturesCard";

const featuresData = [
  {
    icon: searchIcon.src,
    title: "Browsing Plugin",
    description:
      "Search and summarize the web. Gain immediate and updated knowledge.",
  },
  {
    icon: peopleIcon.src,
    title: "GPT Prof ✨",
    description:
      "Upload your documents and let AI explain everything in detail to you.  It is like having a personal tutor at your fingertips, available at any time.",
  },
  {
    icon: pdfIcon.src,
    title: "Chat With PDF",
    description:
      "Upload a PDF files, ask questions, and get summaries. Let AI answer them.",
  },
  {
    icon: palyIcon.src,
    title: "YouTube video",
    description:
      "Transcribe and summarize YouTube videos just by providing the URL of the video.",
  },
  {
    icon: diagramIcon.src,
    title: "Diagram Plugin",
    description: "Create and edit diagrams. Build mind map based on your data.",
  },
  {
    icon: documentIcon.src,
    title: "Document OCR AI",
    description: "Convert scanned and handwritten PDFs into digital formats.",
  },
  {
    icon: micIcon.src,
    title: "Audio Transcription ",
    description:
      "Upload an audio/MP4 file and get the transcribed text with a summary.",
  },
  {
    icon: videoIcon.src,
    title: "Video summarization",
    description: "Upload a video and get the transcribed text with a summary.",
  },
  {
    icon: testIcon.src,
    title: "Question & Answer Generator",
    description:
      "Generate diverse test questions for self assessment purposes.",
  },
];

const Features = () => {
  return (
    <section className="container mb-[140px] featuresContainer pt-[120px]">
      <h2 className="text-center text-[36px] font-[700] mb-[120px]">
        Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
        {featuresData.map((item, idx) => (
          <FeaturesCard key={idx} item={item} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default Features;
