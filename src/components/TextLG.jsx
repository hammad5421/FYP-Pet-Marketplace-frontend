import React from "react";

const TextLG = ({ classes = "", text = "", color = "text-black" }) => {
  return <h1 className={`text-sm md:text-lg ${color} ${classes}`}>{text}</h1>;
};

export default TextLG;
