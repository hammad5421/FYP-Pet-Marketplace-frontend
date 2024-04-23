import React from "react";

const TextXS = ({ classes = "", text = "", color = "text-black" }) => {
  return <h1 className={`text-xs md:text-xs ${color} ${classes}`}>{text}</h1>;
};

export default TextXS;
