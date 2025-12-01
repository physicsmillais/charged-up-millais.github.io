const PDFPage = () => {
  return (
    <div className="w-screen h-screen overflow-auto flex justify-center items-center">
      <iframe
        src="https://drive.google.com/file/d/1b4coVUen0AUh_HA7d0SMnis1k845qn0Z/view?usp=sharing?embedded=true"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
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
