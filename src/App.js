import React, { useState } from "react";
import Header from "./components/Header";
import Inputs from "./components/Inputs";

function App() {
  const [newItem, setNewItem] = useState([]);
  const [foodInput, setFoodInput] = useState([]);
  const [qntityInput, setQntityInput] = useState([]);
  const [selectInput, setSelectInput] = useState([]);

  return (
    <div>
      <div className="main">
        <Header />
        <div className="lists">
          <Inputs
            newItem={newItem}
            setNewItem={setNewItem}
            foodInput={foodInput}
            setFoodInput={setFoodInput}
            qntityInput={qntityInput}
            setQntityInput={setQntityInput}
            selectInput={selectInput}
            setSelectInput={setSelectInput}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
