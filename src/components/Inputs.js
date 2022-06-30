import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Inputs = () => {
  const [newItem, setNewItem] = useState([]);
  const [foodInput, setFoodInput] = useState([]);
  const [qntityInput, setQntityInput] = useState([]);
  const [selectInput, setSelectInput] = useState([]);
  const [deleteInput, setDeleteInput] = useState(false)


  const foodInputHandler = (e) => {
    e.preventDefault();
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
    setNewItem([...newItem, `${foodInput} / ${qntityInput} ${selectInput} ${deleteInput}`]);
    setFoodInput("");
    setQntityInput("");
    setSelectInput("");
    setDeleteInput(current => !current)
   

  };
  return (
    <div className="inputs">
      <div className="inputs-btns">
        <input
          placeholder="Product"
          type="text"
          className="input input-text"
          value={foodInput}
          onChange={foodInputHandler}
        />
        <input
          placeholder="Quantity"
          type="number"
          className="quantityinput"
          value={qntityInput}
          onChange={qntityInputHandler}
        />
        <select
          name=""
          id="selectInput"
          value={selectInput}
          onChange={selectInputHandler}
        >
          <option value="default">Choose</option>
          <option value="csomag">pack</option>
          <option value="db">piece</option>
          <option value="kg">kg</option>
          <option value="dkg">dkg</option>
          <option value="g">g</option>
          <option value="l">l</option>
        </select>
        <button className="btn" onClick={addToList}>
          Add item
        </button>
      </div>

      <div className="list">
        <ul id="list">
          {newItem.map((item) => (
            <li>{item}</li>
          ))}
          <button className={deleteInput ? "" : "hidden"} value={deleteInput}>Delete</button>
        </ul>
      </div>
    </div>
  );
};

export default Inputs;
