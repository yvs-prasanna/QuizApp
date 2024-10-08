import React from "react";

import "./index.css";

import { QRCodeSVG } from "qrcode.react";

const QRcodeGen = () => {
  const dataToEncode = "https://indiangkquiz.onrender.com"; // The data or URL you want to encode

  return (
    <div style={{ color: "white", textAlign: "center", marginTop: "50px" }}>
      <h2>QR Code Generator</h2>

      {/* QRCode component from qrcode.react */}
      <QRCodeSVG
        className="qrcode"
        value={dataToEncode} // Data to be encoded in the QR code
        size={256} // Size of the QR code (256px by default)
        bgColor="#ffffff" // Background color of the QR code
        fgColor="#000000" // Foreground (QR code color)
        level="H" // Error correction level (L, M, Q, H)
        includeMargin={true} // Include margin around QR code
      />

      <p>
        Scan the QR code or click <a href={dataToEncode}>here</a> to visit the
        URL
      </p>
    </div>
  );
};

export default QRcodeGen;
