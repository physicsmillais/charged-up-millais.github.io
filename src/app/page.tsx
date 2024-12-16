const PDFPage = () => {
  return (
    <div className="w-screen h-screen overflow-auto flex justify-center items-center">
      <iframe
        src="https://drive.google.com/file/d/13gdEIB4Zs0bN9su0Br1wONV6xBUlol3S/preview?embedded=true"
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
