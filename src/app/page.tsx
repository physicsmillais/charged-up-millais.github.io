const PDFPage = () => {
  return (
    <div className="w-screen h-screen overflow-auto flex justify-center items-center">
      <iframe
        src="https://drive.google.com/file/d/1_CYrHh53z9rAJQ3KH7kA6hLqG2W720NA/preview?usp=sharing?embedded=true"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        frameBorder={0}
        title="PDF Viewer"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default PDFPage;
