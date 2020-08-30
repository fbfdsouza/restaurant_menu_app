import React from "react";

const DropDown = () => {
  return (
    <select className="ui dropdown">
      <option value="">Tamanho</option>
      <option value="0">MM - R$ 7,00</option>
      <option value="1">P - R$ 12,00</option>
      <option value="2">M - R$ 17,00</option>
      <option value="3">G - R$ 30,00</option>
    </select>
  );
};

export default DropDown;
