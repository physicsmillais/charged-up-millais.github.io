const PDFPage = () => {
  return (
    <div className="w-full h-full">
      <object data="ChargedUpDec2024.pdf" type="application/pdf">
        <embed src="ChargedUpDec2024.pdf" type="application/pdf" />
    </object>
    </div>
  );
};

export default PDFPage;


