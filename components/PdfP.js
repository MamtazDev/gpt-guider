import React, { useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PdfP = ({ viewePdf }) => {
  const newplugin = defaultLayoutPlugin();
  return (
    <>
      <div>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          {viewePdf && (
            <>
              <Viewer fileUrl={viewePdf} plugins={[newplugin]} />
            </>
          )}
          {!viewePdf && <div className="text-black">No PDF</div>}
        </Worker>
      </div>
    </>
  );
};

export default PdfP;
