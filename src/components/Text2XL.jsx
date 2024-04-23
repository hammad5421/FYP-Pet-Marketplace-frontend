import React from "react";

const Text2XL = ({ classes = "", text = "", color = "text-black" }) => {
  return <h1 className={`text-lg md:text-2xl ${color} ${classes}`}>{text}</h1>;
};

export default Text2XL;
