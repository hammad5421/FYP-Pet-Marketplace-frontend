import React from "react";

const Text3XL = ({ classes = "", text = "", color = "text-black" }) => {
  return <h1 className={`text-xl md:text-3xl ${color} ${classes}`}>{text}</h1>;
};

export default Text3XL;
