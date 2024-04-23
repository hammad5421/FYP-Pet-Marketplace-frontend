import React from "react";

const Text4XL = ({ classes = "", text = "", color = "text-black" }) => {
  return <h1 className={`text-2xl md:text-4xl ${color} ${classes}`}>{text}</h1>;
};

export default Text4XL;
