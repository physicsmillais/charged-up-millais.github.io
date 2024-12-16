const PDFPage = () => {
  return (
    <div className="w-screen h-screen overflow-auto">
      <object
        data="/ChargedUpDec2024.pdf"
        type="application/pdf"
        className="w-screen h-screen min-w-screen"
      >
        <embed
          src="/ChargedUpDec2024.pdf"
          type="application/pdf"
          className="w-screen h-screen min-w-screen"
        />
      </object>
    </div>
  );
};

export default PDFPage;
