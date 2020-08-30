import React from "react";

const BackGroundImage = ({ src }) => {
  return (
    <div
      style={{
        position: "fixed",
        height: "50vh",
        overflow: "hidden",
        top: "25vh",
        opacity: "0.15",
        width: "100%",
      }}
    >
      <img src={src} alt="background" />
    </div>
  );
};

export default BackGroundImage;
