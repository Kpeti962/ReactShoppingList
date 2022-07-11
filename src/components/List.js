import React from "react";

const List = ({ productName, quantity, unit, newItem, setNewItem, id, item }) => {
  const deleteHandler = (clickedItemId) => {
    console.log(clickedItemId);
    const filteredArray = newItem.filter((item) => item.id !== clickedItemId);
    setNewItem(filteredArray);
    console.log(filteredArray);
  };
const doneHandler = (mappedItem) => {

const mapped = newItem.map((item) => {
  if (item.id === mappedItem.id)
  {mapped.target.style.setProperty('background', 'lightgreen')}
  console.log(mappedItem);
  return mapped
}
)

 /* e.target.style.setProperty('background', 'lightgreen')
 e.target.style.setProperty('border', '0 solid black')   */

  }  



  return (
      <li>
    <div className="inputList" contentEditable="true" onChange={doneHandler}>
      {productName} / {quantity} {unit}
    </div>
    <div className="deleteAndCheckedBtns">
      <button onClick={() => doneHandler(id)}>Purchased</button>
      <button onClick={() => deleteHandler(id)}>Delete</button>

    </div>
    </li>
  );
};

export default List;


