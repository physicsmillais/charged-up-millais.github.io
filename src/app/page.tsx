const PDFPage = () => {
  return (
    <div style={{ height: "100vh", overflowY: "auto" }}>
      <iframe
        src="/ChargedUpDec2024.pdf"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          overflow: "auto",
        }}
        title="PDF Viewer"
      ></iframe>
    </div>
  );
};

export default PDFPage;
