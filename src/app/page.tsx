const PDFPage = () => {
  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <p>
        If the PDF doesn't scroll properly,{" "}
        <a href="/your-pdf-file.pdf" target="_blank" rel="noopener noreferrer">
          click here to view it
        </a>{" "}
        in a new tab.
      </p>
      <iframe
        src="/your-pdf-file.pdf"
        style={{
          width: "100%",
          height: "90vh",
          border: "none",
          overflow: "auto",
        }}
        title="PDF Viewer"
      ></iframe>
    </div>
  );
};

export default PDFPage;

