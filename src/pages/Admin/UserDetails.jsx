import React from "react";
import SideBar from "./SideBar";
import AdminNav from "./AdminNav";

export default function UserDetails() {
  return (
    <>
      <div className="text-gray-800 font-inter">
        <SideBar />
        {/* <!-- start: Main --> */}
        <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main">
          <AdminNav />
          {/* Tags-start */}
          <div className="m-5">
            <section className="bg-blueGray-50">
              <div className="w-full lg:w-1/2 px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                  <div className="px-6">
                    <div className="text-center mt-12 ">
                      <img
                        src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                        className="shadow-xl rounded-full h-40 border-none m-auto"
                      />
                      <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
                        Jenna Stones
                      </h3>
                      <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                        <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                        Los Angeles, California
                      </div>
                      <div className="mb-2 text-blueGray-600 mt-10">
                        <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                        Solution Manager - Creative Tim Officer
                      </div>
                      <div className="mb-2 text-blueGray-600">
                        <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                        University of Computer Science
                      </div>
                    </div>
                    <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                      <div className="flex flex-wrap justify-center">
                        <div className="w-full lg:w-9/12 px-4">
                          <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                            An artist of considerable range, Jenna the name
                            taken by Melbourne-raised, Brooklyn-based Nick
                            Murphy writes, performs and records all of his own
                            music, giving it a warm, intimate feel with a solid
                            groove structure. An artist of considerable range.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* <UserDetails /> */}
          {/* Tags-end */}
        </main>
        {/* <!-- end: Main --> */}
      </div>
    </>
  );
}
