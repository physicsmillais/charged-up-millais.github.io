const PDFPage = () => {
  return (
    <div style={{ height: "100vh", overflowY: "auto" }}>
      <object data="ChargedUpDec2024.pdf" type="application/pdf">
        <embed src="ChargedUpDec2024.pdf" type="application/pdf" />
    </object>
    </div>
  );
};

export default PDFPage;


