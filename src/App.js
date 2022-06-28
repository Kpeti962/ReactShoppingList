import React from "react";
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import List from "./components/List";

function App() {
  return (
    <div>
      <div className="main">
      <div className="title">
      <Header />
      </div>
      <div className="lists">
      <Inputs />
      <List />
      </div>
      </div>
    </div>
  );
}

export default App;
