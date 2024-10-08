import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import nameContext from "../../context/NameContext";

import Cookies from "js-cookie";

import "./index.css";

const Entername = (props) => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onClicksubmitName = () => {
    Cookies.set("Username", name, { expires: 30, path: "/" });
    console.log("Hello ", Cookies.get("Username"));
    navigate("/question");
  };
  return (
    <nameContext.Provider
      value={{
        name: name,
        onChangeName: onChangeName,
      }}
    >
      return (
      <div className="EnterName-Block">
        <h1 className="EnterName-text">Enter Your Name</h1>
        <input
          className="input-Block"
          type="text"
          placeholder="Enter your name Here"
          value={name}
          onChange={onChangeName}
        />
        <button onClick={onClicksubmitName} className="name-submit-button">
          Submit
        </button>
      </div>
      );
    </nameContext.Provider>
  );
};

export default Entername;
