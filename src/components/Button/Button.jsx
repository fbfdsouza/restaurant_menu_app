import React from "react";

const Button = ({ onClick, children, type, style }) => {
  return (
    <div>
      <button
        style={
          style
            ? style
            : {
                backgroundColor: "#25D366",
                color: "#fff",
                marginRight: "0px",
              }
        }
        className="ui button"
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
export default Button;
