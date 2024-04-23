import React from "react";

const Text9XL = ({ classes = "", text = "", color = "text-black" }) => {
  return <h1 className={`text-6xl md:text-9xl ${color} ${classes}`}>{text}</h1>;
};

export default Text9XL;
