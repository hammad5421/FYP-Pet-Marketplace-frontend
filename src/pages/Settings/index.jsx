import React from "react";
import PersonalDetails from "./PersonalDetails";
import SideBar from "../Admin/SideBar";
import AdminNav from "../Admin/AdminNav";
import SettingsBar from "./SettingsBar";

export default function SettingsPage() {
  return (
    <>
      <div className="text-gray-800 font-inter">
        {/* Side Bar */}
        <SettingsBar />
        {/* <!-- start: Main --> */}
        <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main">
          <AdminNav />
          {/* Tags */}
          <div className="m-5">
            <PersonalDetails />
          </div>

          {/* Tags */}
        </main>
        {/* <!-- end: Main --> */}
      </div>
    </>
  );
}
