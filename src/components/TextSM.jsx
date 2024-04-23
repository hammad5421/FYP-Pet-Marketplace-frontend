import React from "react";

const TextSM = ({ classes = "", text = "", color = "text-black" }) => {
  return <h1 className={`text-base md:text-sm ${color} ${classes}`}>{text}</h1>;
};

export default TextSM;
