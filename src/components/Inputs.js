import React from "react";

const Inputs = () => {
  const addToList = () => {
    const lists = document
      .getElementById("list")
      .appendChild(
        document.createTextNode(
          `${document.querySelector(".input-text").value} ${
            document.querySelector(".quantityinput").value
          } / ${document.getElementById("selectInput").value}`
        
          )

        
      );
      lists.style.display = "list-item";
  };

  return (
    <div className="inputs">
      <input type="text" className="input input-text" />
      <input type="number" className="quantityinput" />
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
