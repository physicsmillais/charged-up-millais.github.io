const PDFPage = () => {
  return (
    <div style={{ height: "100vh", overflowY: "auto" }}>
      <object
        data="/ChargedUpDec2024.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <p>
          Your browser does not support displaying PDFs. You can{" "}
          <a href="/ChargedUpDec2024.pdf" download>
            download the PDF
          </a>{" "}
          instead.
        </p>
      </object>
    </div>
  );
};

export default PDFPage;


