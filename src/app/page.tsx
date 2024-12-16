const PDFPage = () => {
  return (
    <div className="w-screen h-screen overflow-auto">
      <iframe
        src="/ChargedUpDec2024.pdf"
        className="w-screen h-screen min-w-full"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default PDFPage;
