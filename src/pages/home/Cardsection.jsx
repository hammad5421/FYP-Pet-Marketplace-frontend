import React from 'react';
import { Link } from 'react-router-dom';
import Dog from "../../Assets/GermanShepered.jpg"; // Import your sample stock image
import Dog1 from "../../Assets/Labrodor.jpg"; // Import your sample stock image
import Dog2 from "../../Assets/rottviller.jpg"; // Import your sample stock image
import Dog3 from "../../Assets/huski.jpg"; // Import your sample stock image
import Cat1 from "../../Assets/Cat1.jpg"; // Import your sample stock image
import Cat2 from "../../Assets/Cat2.jpg"; // Import your sample stock image
import Cat3 from "../../Assets/Cat3.jpg"; // Import your sample stock image
import Cat4 from "../../Assets/Cat4.jpg"; // Import your sample stock image

const CardGrid = () => {
  return (
    <section className="container p-6 mx-auto space-y-3 dark:text-white bg-yellow-200">
      {/* Yellow background added to the section */}
      <h4 className="text-xl font-bold text-gray-700 capitalize dark:text-gray-300 md:text-3xl text-center">What kind of pet breed would you like?</h4>

      <div className="flex items-center justify-center">
        <div className="grid gap-8 my-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Each card */}
          <div className="w-full max-w-md text-center relative overflow-hidden">
            <a href="/">
              <div className="relative group">
                {/* Background image */}
                <img src={Dog} alt="Dog" className="object-cover object-center w-full h-64 mx-auto  bg-blue-100  dark:bg-gray-900 dark:border-gray-600" />
                {/* Transparent layer */}
                <div className="absolute inset-0 bg-purple-500 bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
                {/* Text */}
                <div className="absolute inset-x-0 bottom-0 text-white">
                  <h5 className="text-xl font-bold  bg-purple-600 p-1">German Shepered</h5>
                </div>
              </div>
            </a>
          </div>
          {/* Repeat the above structure for other cards */}
          {/* Other cards */}

      {/* Each card */}
      <div className="w-full max-w-md text-center relative overflow-hidden">
            <a href="/">
              <div className="relative group">
                {/* Background image */}
                <img src={Dog1} alt="Dog" className="object-cover object-center w-full h-64 mx-auto  bg-blue-100  dark:bg-gray-900 dark:border-gray-600" />
                {/* Transparent layer */}
                <div className="absolute inset-0 bg-purple-500 bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
                {/* Text */}
                <div className="absolute inset-x-0 bottom-0 text-white">
                  <h5 className="text-xl font-bold  bg-purple-600 p-1">Labrador Retriever</h5>
                </div>
              </div>
            </a>
          </div>
          {/* Repeat the above structure for other cards */}
          {/* Other cards */}      {/* Each card */}
          <div className="w-full max-w-md text-center relative overflow-hidden">
            <a href="/">
              <div className="relative group">
                {/* Background image */}
                <img src={Dog2} alt="Dog" className="object-cover object-center w-full h-64 mx-auto  bg-blue-100  dark:bg-gray-900 dark:border-gray-600" />
                {/* Transparent layer */}
                <div className="absolute inset-0 bg-purple-500 bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
                {/* Text */}
                <div className="absolute inset-x-0 bottom-0 text-white">
                  <h5 className="text-xl font-bold  bg-purple-600 p-1">Rottweiler</h5>
                </div>
              </div>
            </a>
          </div>
          {/* Repeat the above structure for other cards */}
          {/* Other cards */}      {/* Each card */}
          <div className="w-full max-w-md text-center relative overflow-hidden">
            <a href="/">
              <div className="relative group">
                {/* Background image */}
                <img src={Dog3} alt="Dog" className="object-cover object-center w-full h-64 mx-auto  bg-blue-100  dark:bg-gray-900 dark:border-gray-600" />
                {/* Transparent layer */}
                <div className="absolute inset-0 bg-purple-500 bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
                {/* Text */}
                <div className="absolute inset-x-0 bottom-0 text-white">
                  <h5 className="text-xl font-bold  bg-purple-600 p-1">Siberian Husky</h5>
                </div>
              </div>
            </a>
          </div>
          {/* Repeat the above structure for other cards */}
          {/* Other cards */}      {/* Each card */}
          <div className="w-full max-w-md text-center relative overflow-hidden">
            <a href="/">
              <div className="relative group">
                {/* Background image */}
                <img src={Cat1} alt="Dog" className="object-cover object-center w-full h-64 mx-auto  bg-blue-100  dark:bg-gray-900 dark:border-gray-600" />
                {/* Transparent layer */}
                <div className="absolute inset-0 bg-purple-500 bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
                {/* Text */}
                <div className="absolute inset-x-0 bottom-0 text-white">
                  <h5 className="text-xl text-yello-600 font-bold bg-purple-600 p-1">Persian</h5>
                </div>
              </div>
            </a>
          </div>
          {/* Repeat the above structure for other cards */}
          {/* Other cards */}      {/* Each card */}
          <div className="w-full max-w-md text-center relative overflow-hidden">
            <a href="/">
              <div className="relative group">
                {/* Background image */}
                <img src={Cat2} alt="Dog" className="object-cover object-center w-full h-64 mx-auto  bg-blue-100  dark:bg-gray-900 dark:border-gray-600" />
                {/* Transparent layer */}
                <div className="absolute inset-0 bg-purple-500 bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
                {/* Text */}
                <div className="absolute inset-x-0 bottom-0 text-white">
                  <h5 className="text-xl font-bold  bg-purple-600 p-1">Siamese</h5>
                </div>
              </div>
            </a>
          </div>
          {/* Repeat the above structure for other cards */}
          {/* Other cards */}      {/* Each card */}
          <div className="w-full max-w-md text-center relative overflow-hidden">
            <a href="/">
              <div className="relative group">
                {/* Background image */}
                <img src={Cat3} alt="Dog" className="object-cover object-center w-full h-64 mx-auto  bg-blue-100  dark:bg-gray-900 dark:border-gray-600" />
                {/* Transparent layer */}
                <div className="absolute inset-0 bg-purple-500 bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
                {/* Text */}
                <div className="absolute inset-x-0 bottom-0 text-white">
                  <h5 className="text-xl font-bold  bg-purple-600 p-1">Maine Coon</h5>
                </div>
              </div>
            </a>
          </div>
          {/* Repeat the above structure for other cards */}
          {/* Other cards */}      {/* Each card */}
          <div className="w-full max-w-md text-center relative overflow-hidden">
            <a href="/">
              <div className="relative group">
                {/* Background image */}
                <img src={Cat4} alt="Dog" className="object-cover object-center w-full h-64 mx-auto  bg-blue-100  dark:bg-gray-900 dark:border-gray-600" />
                {/* Transparent layer */}
                <div className="absolute inset-0 bg-purple-500 bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
                {/* Text */}
                <div className="absolute inset-x-0 bottom-0 text-white">
                  <h5 className="text-xl font-bold  bg-purple-600 p-1">Khao Manee</h5>
                </div>
              </div>
            </a>
          </div>
          {/* Repeat the above structure for other cards */}
          {/* Other cards */}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
