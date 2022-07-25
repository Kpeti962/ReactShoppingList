import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faTrash,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

const List = ({
  productName,
  quantity,
  unit,
  newItem,
  setNewItem,
  id,
  item,
  purchase,
}) => {
  const deleteHandler = (clickedItemId) => {
    console.log(clickedItemId);
    const filteredArray = newItem.filter((item) => item.id !== clickedItemId);
    setNewItem(filteredArray);
    console.log(filteredArray);
  };

  const doneHandler = (rowId) => {
    let changedArray = newItem;
    changedArray.forEach((clickedRow) => {
      if (clickedRow.id === rowId) {
        clickedRow.purchase = true;
      }
    });
    console.log(changedArray);
    setNewItem([...changedArray]);
  };

  const resetHandler = (rowId) => {
    let changedArray = newItem;
    changedArray.forEach((clickedRow) => {
      if (clickedRow.id === rowId) {
        clickedRow.purchase = false;
      }
    });
    console.log(changedArray);
    setNewItem([...changedArray]);
  };

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
    textDecoration: "line-through",
  };

  const notPurchasedItemStyle = {
    color: "black",
  };

  return (
    <li>
      <div
        style={purchase ? purchasedItemStyle : notPurchasedItemStyle}
        className="inputList"
        contentEditable="true"
        onChange={doneHandler}
      >
        {productName} - {quantity} {unit}
      </div>
      <div className="deleteAndCheckedBtns">
        {purchase === false && (
          <button onClick={() => doneHandler(id)}>
            <FontAwesomeIcon icon={faCartShopping} className="iconCart" />
          </button>
        )}
        {purchase === true && (
          <button onClick={() => resetHandler(id)}>
            <FontAwesomeIcon icon={faRotateLeft} className="iconBack" />
          </button>
        )}
        <button onClick={() => deleteHandler(id)}>
          <FontAwesomeIcon icon={faTrash} className="iconRed" />
        </button>
      </div>
    </li>
  );
};

export default List;
