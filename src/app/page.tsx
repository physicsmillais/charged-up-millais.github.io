import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const PDFPage = () => {
  return (
    <div className="w-full h-screen overflow-auto">
      {/* PDF.js worker file */}
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.8.162/build/pdf.worker.min.js`}>
        <div className="w-full h-full">
          <Viewer fileUrl="/ChargedUpDec2024.pdf" />
        </div>
      </Worker>
    </div>
  );
};

export default PDFPage;
