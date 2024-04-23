import React from "react";

const TextMD = ({ classes = "", text = "", color = "text-black" }) => {
  return <h1 className={`text-base md:text-md ${color} ${classes}`}>{text}</h1>;
};

export default TextMD;
