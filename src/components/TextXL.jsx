import React from "react";

const TextXL = ({ classes = "", text = "", color = "text-black" }) => {
  return <h1 className={`text-md md:text-xl ${color} ${classes}`}>{text}</h1>;
};

export default TextXL;
