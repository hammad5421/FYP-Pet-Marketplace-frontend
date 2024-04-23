import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const ReactToastifyContainer = () => {
  return (
    <ToastContainer
      autoClose={2500}
      position="top-right"
      pauseOnHover={true}
      draggable={true}
      theme="light"
      className="font-semibold"
      bodyClassName="text-black"
    />
  );
};

export default ReactToastifyContainer;
