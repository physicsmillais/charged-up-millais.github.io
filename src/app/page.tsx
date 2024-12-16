const PDFPage = () => {
  return (
    <div className="w-full h-screen">
      <object 
        data="ChargedUpDec2024.pdf" 
        type="application/pdf" 
        className="w-full h-full"
      >
        <embed 
          src="ChargedUpDec2024.pdf" 
          type="application/pdf" 
          className="w-full h-full"
        />
      </object>
    </div>
  );
};

export default PDFPage;
