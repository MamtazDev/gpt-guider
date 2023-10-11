import React, { useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { TbLayoutSidebar } from "react-icons/tb";
import { IoMdSend } from "react-icons/io";

import PdfP from "@/components/PdfP";

const PdfShowPage = () => {
  const [viewePdf, setViewPdf] = useState(null);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [selectedPdfs, setSelectedPdfs] = useState([]);

  const inputRef = useRef(null);

  const handleChange = (e) => {
    const selectedFiles = e.target.files;
    const pdfFiles = Array.from(selectedFiles).filter(
      (file) => file.type === "application/pdf"
    );

    if (pdfFiles.length > 0) {
      setSelectedPdfs(pdfFiles);

      // Preview the first selected PDF
      const reader = new FileReader();
      reader.readAsDataURL(pdfFiles[0]);
      reader.onload = (e) => {
        setViewPdf(e.target.result);
      };
    } else {
      setSelectedPdfs([]);
      setViewPdf(null);
      console.log("Please select one or more PDF files.");
    }
  };
  // const handleChange = (e) => {
  //   let selectedFile = e.target.files[0];
  //   setSelectedPdf(selectedFile);
  //   if (selectedFile) {
  //     if (selectedFile) {
  //       let reader = new FileReader();
  //       reader.readAsDataURL(selectedFile);

  //       reader.onload = (e) => {
  //         setViewPdf(e.target.result);
  //       };
  //     } else {
  //       setViewPdf(null);
  //     }
  //   } else {
  //     console.log("Please select");
  //   }
  // };

  const handlePdfSelect = (value) => {
    const reader = new FileReader();
    reader.readAsDataURL(value);
    reader.onload = (e) => {
      setViewPdf(e.target.result);
    };
  };
  console.log(selectedPdfs);

  return (
    <div className="flex w-full">
      <input
        ref={inputRef}
        type="file"
        onChange={handleChange}
        accept="application/pdf"
        className="hidden"
        multiple
      />
      <div className="w-2/12 h-screen bg-[#202123] p-3">
        <div className="flex flex-col gap-2">
          <button
            className="flex items-center gap-2 px-3 py-2  border-[0.1px] border-gray-500 rounded-[6px] w-full"
            onClick={() => inputRef.current.click()}
          >
            <AiOutlinePlus /> New Pdf
          </button>
          <div>
            {selectedPdfs?.map((item, idx) => (
              <button key={idx} onClick={() => handlePdfSelect(item)}>
                {item?.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="w-10/12 h-screen overflow-y-scroll bg-white relative">
        <div>
          <PdfP viewePdf={viewePdf} />
        </div>
      </div>
    </div>
  );
};

export default PdfShowPage;
