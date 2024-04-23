import React from "react";

import SideBar from "./SideBar";
import AdminNav from "./AdminNav";
import UsersTable from "./UsersTable";
import AdminSearchBar from "./AdminSearchBar";
import UserDetails from "./UserDetails";
import ReplyQuaries from "./ReplyQuaries";
import CrudBookings from "./CrudBookings";
import Admin from "./Admin";

export default function AdminPanel() {
  return (
    <>
      <div className="text-gray-800 font-inter">
        <SideBar />
        {/* <!-- start: Main --> */}
        <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main">
          <AdminNav />
          {/* Tags-start */}
          <div className="m-5">
            {/* <AdminSearchBar />
            <UsersTable /> */}
            {/* <AdminSearchBar />
            <ReplyQuaries /> */}

            <CrudBookings />
          </div>

          {/* <UserDetails /> */}
          {/* Tags-end */}
        </main>
        {/* <!-- end: Main --> */}
      </div>
    </>
  );
}
