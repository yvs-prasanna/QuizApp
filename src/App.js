import { Component } from "react";

import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import EachQuestion from "./components/EachQuestion";
import Header from "./components/Header";
import Entername from "./components/Entername";
import QRcodePage from "./components/QRcodePage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="Whole-Page">
          <Header />
          <Routes>
            <Route exact path="/start" Component={Entername} />
            <Route path="/question" Component={EachQuestion} />
            <Route path="/" Component={QRcodePage} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
