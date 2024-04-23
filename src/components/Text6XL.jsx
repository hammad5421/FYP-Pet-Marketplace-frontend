import React from "react";

const Text6XL = ({ classes = "", text = "", color = "text-black" }) => {
  return <h1 className={`text-4xl md:text-6xl ${color} ${classes}`}>{text}</h1>;
};

export default Text6XL;
