import React from "react";

const Text7XL = ({ classes = "", text = "", color = "text-black" }) => {
  return <h1 className={`text-4xl md:text-7xl ${color} ${classes}`}>{text}</h1>;
};

export default Text7XL;
