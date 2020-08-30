import React from "react";

const PresentationFoodCard = ({ image, name, description, onClick }) => {
  return (
    <div
      onClick={() => onClick(name)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <img src={image} alt={description} />

      <div>{description}</div>
    </div>
  );
};

export default PresentationFoodCard;
