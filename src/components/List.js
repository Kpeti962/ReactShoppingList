import React from "react";

const List = ({ productName, quantity, unit, newItem, setNewItem, id, item, purchase }) => {
  const deleteHandler = (clickedItemId) => {
    console.log(clickedItemId);
    const filteredArray = newItem.filter((item) => item.id !== clickedItemId);
    setNewItem(filteredArray);
    console.log(filteredArray);
  };

  const doneHandler = (rowId) => {
    let changedArray = newItem;
    changedArray.forEach((clickedRow) => {
      if (clickedRow.id === rowId){
        clickedRow.purchase = true
      }
    })
    console.log(changedArray);
    setNewItem([...changedArray])
  }



/* const doneHandler = (rowId) => {
  const filteredArray = newItem.filter((item) => item.id === rowId);
  console.log(filteredArray);
  const newItemsWithoutFiltered = newItem.filter((item) => item.id !== rowId);
  const clickedRow = filteredArray[0] 
  clickedRow.purchase = true
console.log(clickedRow);
setNewItem([...newItemsWithoutFiltered, clickedRow])
}  */


const purchasedItemStyle = {
  color: "rgb(21, 126, 0)",
  textDecoration: 'line-through'
}

const notPurchasedItemStyle = {
  color: "black"
}
/* e.target.style.setProperty('background', 'lightgreen')
e.target.style.setProperty('border', '0 solid black')   */



/* const mapped = newItem.map((item) => {
  if (item.id === rowId)
  {mapped.target.style.setProperty('background', 'lightgreen')}
  console.log(rowId);

}
) */


  return (
      <li>
    <div style={purchase ? purchasedItemStyle : notPurchasedItemStyle}className="inputList" contentEditable="true" onChange={doneHandler}>
      {productName} / {quantity} {unit} 
    </div>
    <div className="deleteAndCheckedBtns">
      {purchase === false && 
      <button onClick={() => doneHandler(id)}>Purchased</button>
      }
      {purchase === true && 
      <button>Visszaállít</button>
      }
      <button onClick={() => deleteHandler(id)}>Delete</button>

    </div>
    </li>
  );
};

export default List;


