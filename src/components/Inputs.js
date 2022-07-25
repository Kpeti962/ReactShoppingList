import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faPlus
} from "@fortawesome/free-solid-svg-icons";

const Inputs = ({
  newItem,
  setNewItem,
  foodInput,
  setFoodInput,
  qntityInput,
  setQntityInput,
  selectInput,
  setSelectInput,
}) => {
  const foodInputHandler = (e) => {
    setFoodInput(e.target.value);
  };
  const qntityInputHandler = (e) => {
    setQntityInput(e.target.value);
  };
  const selectInputHandler = (e) => {
    setSelectInput(e.target.value);
  };

  const addToList = (e) => {
    e.preventDefault();

    if (foodInput === "") {
      alert("Please type the product");
    } else if (qntityInput === "") {
      alert("Please type the quantity");
    } else if (selectInput === "") {
      alert("Please add the unit");
    } else {
      setNewItem([
        ...newItem,
        {
          productName: foodInput,
          quantity: qntityInput,
          unit: selectInput,
          id: uuidv4(),
          purchase: false,
        },
      ]);
      setFoodInput("");
      setQntityInput("");
      setSelectInput("");
    }
  };

  const inputStyle = {
    background: "rgb(207, 170, 3)",
    border: "none",
    
  };

  return (
    <div className="inputsAndList">
        <div className="inputs-btns">
        <input
          style={inputStyle}
          type="text"
          className="input inputText"
          id="inp"
          placeholder="Termék"
          value={foodInput}
          onChange={foodInputHandler}
        />
        <input
          style={inputStyle}
          placeholder="Mennyiség"
          type="number"
          className="quantityinput"
          value={qntityInput}
          onChange={qntityInputHandler}
        />
        <select
          style={inputStyle}
          className="selectInput"
          name=""
          id="selectInput"
          value={selectInput}
          onChange={selectInputHandler}
        >
          <option value="default">Válassz</option>
          <option value="pack">Csomag</option>
          <option value="piece">db</option>
          <option value="kg">kg</option>
          <option value="dkg">dkg</option>
          <option value="g">g</option>
          <option value="l">l</option>
        </select>
        <button className="btn" onClick={addToList}>
        <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      
      

      <div className="list">
        <ul id="list">
          {newItem.map((item) => {
            const { productName, quantity, unit, id, purchase } = item;
            return (
              <List
                productName={productName}
                quantity={quantity}
                unit={unit}
                newItem={newItem}
                setNewItem={setNewItem}
                id={id}
                item={item}
                purchase={purchase}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Inputs;
