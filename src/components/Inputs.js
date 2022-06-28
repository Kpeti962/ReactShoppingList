import React, { useState } from "react";


const Inputs = () => {
  const addToList = () => {
    const newItem = document
      .getElementById("list")
      .appendChild(
        document.createTextNode(
          `${document.querySelector(".input-text").value} ${
            document.querySelector(".quantityinput").value
          } / ${document.getElementById("selectInput").value}`
        
          )
      );

  };

  return (
    <div className="inputs">
      <input placeholder="Termék" type="text" className="input input-text" />
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
        <ul id="list"></ul>
      </div>
    </div>
  );
};

export default Inputs;
