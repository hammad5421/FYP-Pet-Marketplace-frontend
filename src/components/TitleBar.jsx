import React from "react";
import "./TitleBar.css";

const TitleBar = ({ title, description }) => {
  return (
    <div>
      <section className=" TitlebarBg py-32 text-gray-600  body-font relative">
        <div className="overlay"> </div>
        <div className="z-10 relative">
          <div className="container px-auto mx-auto  px-6 py-5 md:flex-row flex-col">
            <div className=" text-center item center  flex-col md:items-start mb-16 md:mb-0 items-center ">
              <h1 className="font-bold  text-white text-center sm:text-5xl text-4xl mb-4 !leading-[3.3rem] ">
                {title}
              </h1>
              <p className="mb-8 leading-relaxed text-white"> {description}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TitleBar;
