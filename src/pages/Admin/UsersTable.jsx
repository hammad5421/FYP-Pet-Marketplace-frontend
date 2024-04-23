import React from "react";
import SideBar from "./SideBar";
import AdminNav from "./AdminNav";

import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Avatar",
    selector: (row) => <img src={row.Avatar} alt="" className="h-10" />,
  },

  {
    name: "Name",
    selector: (row) => row.first_name + row.last_name,
  },
  {
    name: "Email",
    selector: (row) => row.email,
  },
  {
    name: "Interested in",
    selector: (row) => row.interested_in,
  },
  {
    name: "Actions",
    selector: (row) => (
      <button className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
        {row.action}
      </button>
    ),
  },
];

const data = [
  {
    Avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    first_name: "Harper",
    last_name: "Mckinney",
    email: "harper.mckinney@example.com",
    interested_in: "Cricket",
    action: "Action",
  },
  {
    Avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    first_name: "Harper",
    last_name: "Mckinney",
    email: "harper.mckinney@example.com",
    interested_in: "Cricket",
    action: "Action",
  },
  {
    Avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    first_name: "Harper",
    last_name: "Mckinney",
    email: "harper.mckinney@example.com",
    interested_in: "Cricket",
    action: "Action",
  },
  {
    Avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    first_name: "Harper",
    last_name: "Mckinney",
    email: "harper.mckinney@example.com",
    interested_in: "Cricket",
    action: "Action",
  },
  {
    Avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    first_name: "Harper",
    last_name: "Mckinney",
    email: "harper.mckinney@example.com",
    interested_in: "Cricket",
    action: "Action",
  },
];

export default function UsersTable() {
  return (
    <>
      <div className="text-gray-800 font-inter">
        <SideBar />
        {/* <!-- start: Main --> */}
        <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main">
          <AdminNav />
          {/* Tags-start */}
          <div className="m-5">
            <DataTable
              columns={columns}
              data={data}
              pagination
              onRowClicked={() => {
                alert("Hello");
              }}
            />
          </div>

          {/* <UserDetails /> */}
          {/* Tags-end */}
        </main>
        {/* <!-- end: Main --> */}
      </div>
    </>
  );
}
