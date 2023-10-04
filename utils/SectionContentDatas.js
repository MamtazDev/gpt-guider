import browsingImage from "@/assets/images/browsingPlugin.svg";
import gptProfImage from "@/assets/images/GptProf.svg";
import documentImage from "@/assets/images/documentOcr.svg";
import chatWithPdfImage from "@/assets/images/chatWIthPdf.svg";
import audioVideoImage from "@/assets/images/audioAndVideo.svg";
import diagramImage from "@/assets/images/diagramPlugin.svg";
import youtubeVideoImage from "@/assets/images/youtubeVideo.svg";
import questionAnswerImage from "@/assets/images/questionAnswer.svg";

export const browsingPlugin = {
  image: browsingImage.src,
  title: "Browsing Plugin",
  contents: [
    "Search and summarize the web .",
    "Gain immediate and updated knowledge .",
    "Generate articles, from one or more URLs .",
  ],
};

export const gptProf = {
  image: gptProfImage.src,
  title: "GPT Prof",
  contents: [
    {
      header: "Real Time, Interactive Conversations:",
      subHeader:
        "Experience a seamless and dynamic learning journey through real-time voice conversations with Chat GPT. It's like having a personal tutor at your fingertips.",
    },
    {
      header: "Accessibility for All:",
      subHeader:
        "Our platform is designed with inclusivity in mind. Whether you prefer text-based or voice-based learning, our solution caters to your needs, making education accessible to all students.",
    },
  ],
};

export const documentOcr = {
  image: documentImage.src,
  title: "DOCUMENT OCR AI",
  contents: [
    "converts scanned and handwritten texts into digital formats. high accuracy for both documents and handwritten content, streamlining data conversion and accessibility.",
  ],
};

export const chatWithPdf = {
  image: chatWithPdfImage.src,
  title: "Chat With PDF",
  contents: [
    {
      header: "Education:",
      subHeader:
        "Summarize textbooks, clarify concepts, prepare for exams, ask questions based on your books, and answer (MCQs).",
    },
    {
      header: "Research:",
      subHeader:
        "Upload scientific papers and academic articles to obtain the information you need for your research. ",
    },
    {
      header: "Any language:",
      subHeader:
        "You can upload PDFs in any language and receive answers in your preferred language.",
    },
    {
      header: "Sources included:",
      subHeader: "Every answer will include the sources of the relevant pages.",
    },
    {
      header: "Simple and Secure:",
      subHeader:
        "Fast, easy, free and secure! Files are stored in a secure cloud storage and will never be shared.",
    },
    {
      header: "OCR Feature: save your time and effort",
      subHeader:
        "Quickly extract text from images or scanned documents shared by users, reducing manual data entry. No need to write long question just scan or take photo of your question and get answers quickly.",
    },
  ],
};

export const audioVideo = {
  image: audioVideoImage.src,
  title: "Audio & video Transcription and summarizing",
  contents: [
    "upload an audio or Mp4 file and get the transcribed text with a summary.",
    "Upload a video and get the transcribed text with a summary.",
  ],
};

export const diagramPlugin = {
  image: diagramImage.src,
  title: "Diagram plugin",
  contents: [
    {
      header: "Enhanced Understanding:",
      subHeader:
        "Visual representation of information helps students understand complex topics and see the bigger picture.",
    },
    {
      header: "Efficient Study:",
      subHeader:
        "Instead of manually creating mind maps, students can save time by letting the AI generate initial maps which they can then customize.",
    },
    {
      header: "Memory Retention:",
      subHeader:
        "Visual aids like mind maps and diagrams are known to improve memory retention, making it easier for students to recall information during exams.",
    },
  ],
};

export const youtubeVideo = {
  image: youtubeVideoImage.src,
  title: "YouTube video Transcription and summarizing",
  contents: [
    "Transcribe and summarize you tube videos just by provide URL of video. ",
    "Save your time and effort and say good bye to manual transcription and time-consuming video content analysis.",
  ],
};

export const questionAnswer = {
  image: questionAnswerImage.src,
  title: "Questions & Answers Generator",
  contents: [
    "generates diverse test questions for self-assessment purposes. These questions cover various topics, ensuring comprehensive understanding and preparation for exams or assessments.:",
  ],
};
