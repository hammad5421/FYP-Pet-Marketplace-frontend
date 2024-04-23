import React from "react";
import "./index.css";

const DivineMoment = () => {
  return (
    <div>
      <section className=" DivineMomentBg py-32 mt-8 text-gray-600  body-font relative">
        <div className="overlay"> </div>
        <div className="z-10 relative">
          <div className="container px-auto mx-auto  px-6 py-5 md:flex-row flex-col">
            <div className=" text-center item center  flex-col md:items-start mb-16 md:mb-0 items-center ">
             
              <h1 className="font-bold  text-white text-center sm:text-5xl text-4xl mb-4  !leading-[3.3rem] ">
              Create Divine 
                <br className="hidden lg:inline-block" />
                Moments In Hajj and   <br/> Umrah
              </h1>
              <p className="mb-8 leading-relaxed text-white">
                Dictumst integer pellentesque malesuada nibh senectus pede.
                Letius habitasse sapien <br/>cursus purus at si. At elementum dapibus
                pretium hac pede potenti.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Booking Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DivineMoment;
