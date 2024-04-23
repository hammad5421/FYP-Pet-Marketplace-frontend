import React from "react";

const Text5XL = ({ classes = "", text = "", color = "text-black" }) => {
  return <h1 className={`text-3xl md:text-5xl ${color} ${classes}`}>{text}</h1>;
};

export default Text5XL;
