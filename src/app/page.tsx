import Image from "next/image";

export default function Home() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src="/ChargedUpDec2024.pdf"
        style={{ width: "100%", height: "100%" }}
        frameBorder="0"
        title="PDF Viewer"
      />
    </div>
  );
}
