import React from "react";
import Header from "./components/Header";
import Inputs from "./components/Inputs";

function App(foodInput, qntityInput, selectInput) {
  return (
    <div>
      <div className="main">
      <Header />
      <div className="lists">
      <Inputs />
      </div>
      </div>
    </div>
  );
}

export default App;
