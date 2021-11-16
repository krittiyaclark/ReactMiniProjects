import React from "react";

const Button = ({ onAdd, color, text }) => {
  return (
    <button className="btn" style={{ backgroundColor: color }} onClick={onAdd}>
      {text}
    </button>
  );
};

export default Button;
