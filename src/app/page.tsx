const PDFPage = () => {
  return (
    <div className="w-full h-screen overflow-auto">
      <object
        data="ChargedUpDec2024.pdf"
        type="application/pdf"
        className="w-full h-screen"
        style={{
          transform: 'scale(1)', // Ensure no scaling distortion
          transformOrigin: 'top left', // Maintain alignment
        }}
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
