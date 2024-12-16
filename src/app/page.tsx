const PDFPage = () => {
  return (
    <div className="w-full h-screen overflow-auto">
      <object
        data="ChargedUpDec2024.pdf"
        type="application/pdf"
        className="w-full h-screen min-w-full md:min-w-0"
      >
        <embed
          src="ChargedUpDec2024.pdf"
          type="application/pdf"
          className="w-full h-screen"
        />
      </object>
    </div>
  );
};

export default PDFPage;
