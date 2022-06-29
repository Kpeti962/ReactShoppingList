import React, { useState } from "react";

//const [newItem, setNemItem] = useState
/* const foods = document.querySelector(".input-text");
  const qtity = document.querySelector(".quantityinput");
  const unit = document.getElementById("selectInput"); */



const Inputs = () => {
  const [newItem, setNewItem] = useState([]);
  const [textInput, setTextInput] = useState([])

  const userInputHandler = (e) => {
setTextInput(e.target.value)
  }
  const addToList = () => {
    setNewItem(textInput)

   


    
   }
  return (
    <div className="inputs">
      <input placeholder="Termék" type="text" className="input input-text" value = {textInput} onChange={userInputHandler} />
      <input placeholder="Mennyiség" type="number" className="quantityinput" />
      <select name="" id="selectInput">
        <option value="default">Válassz</option>
        <option value="csomag">csomag</option>
        <option value="db">db</option>
        <option value="kg">kg</option>
        <option value="dkg">dkg</option>
        <option value="g">g</option>
        <option value="l">l</option>
      </select>
      <button className="btn" onClick={addToList}>
        Felvétel
      </button>
      <div className="list">
        <ul id="list">
       <li>{newItem}</li>
        </ul>
      </div>
    </div>
  );
};

export default Inputs;
