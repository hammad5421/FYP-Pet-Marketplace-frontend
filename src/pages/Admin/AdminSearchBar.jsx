import React from "react";

export default function AdminSearchBar() {
  return (
    <>
      <section className="bg-gray-50 ">
        <div className="mx-auto max-w-screen-xl">
          {/* <!-- Start coding here --> */}
          <div className="bg-white  relative shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row items-end justify-end space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-1/4">
                <form className="flex items-center">
                  <label for="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 "
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2  "
                      placeholder="Search"
                      required=""
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
