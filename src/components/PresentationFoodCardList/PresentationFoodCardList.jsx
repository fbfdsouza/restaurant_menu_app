import React from "react";

const PresentationFoodCardList = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "70vh",
      }}
    >
      {children}
    </div>
  );
};

export default PresentationFoodCardList;
