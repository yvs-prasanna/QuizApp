import React from "react";

import { useNavigate } from "react-router-dom";

import QRcodeGen from "../QRcodGen";

import "./index.css";

const QRcodePage = (props) => {
  const navigate = useNavigate();
  const onClicksubmitName = () => {
    navigate("/start");
  };
  return (
    <div className="QrcodePage">
      <h1 className="ShallweStartTheGame">Shall We Start The Quiz</h1>
      <div className="qrcode-block">
        <QRcodeGen />
      </div>

      <button onClick={onClicksubmitName} className="name-submit-button">
        Start the Quiz
      </button>
    </div>
  );
};

export default QRcodePage;
