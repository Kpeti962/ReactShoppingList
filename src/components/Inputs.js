import React, { useState } from "react";




const Inputs = () => {
  const [newItem, setNewItem] = useState([]);
  const [foodInput, setFoodInput] = useState([])
  const [qntityInput, setQntityInput] = useState([])
  const [selectInput, setSelectInput] = useState([])

  const foodInputHandler = (e) => {
    setFoodInput(e.target.value)
  }
  const qntityInputHandler = (e) => {
    setQntityInput(e.target.value)
  }
  const selectInputHandler = (e) => {
    setSelectInput(e.target.value)
  }
  

  
  const addToList = () => {
    setNewItem(`${foodInput} / ${qntityInput} ${selectInput}`)

   


    
   }
  return (
    <div className="inputs">
      <input placeholder="Termék" type="text" className="input input-text" value = {foodInput} onChange={foodInputHandler} />
      <input placeholder="Mennyiség" type="number" className="quantityinput" value = {qntityInput} onChange={qntityInputHandler} />
      <select name="" id="selectInput" value = {selectInput} onChange={selectInputHandler}>
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
