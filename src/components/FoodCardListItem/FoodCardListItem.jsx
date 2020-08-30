import React from "react";
import AddItem from "../AddItem";

const FoodCardListItem = ({
  image,
  itemName,
  description,
  code,
  handleInputChange,
  price,
  addItem,
  removeItem,
}) => {
  return (
    <div
      className="item"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        borderBottom: "1px solid lightgrey",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: 1 }}>
          <img
            style={{
              width: "5em",
              height: "5em",
              margin: "10px 15px 10px 0px",
            }}
            className="ui avatar image"
            src={image}
            alt={itemName}
          />
        </div>
        <div style={{ flex: 1 }} className="content">
          {description}
        </div>
        <div>
          <AddItem
            addItem={addItem}
            removeItem={removeItem}
            price={price}
            itemName={itemName}
            code={code}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default FoodCardListItem;
