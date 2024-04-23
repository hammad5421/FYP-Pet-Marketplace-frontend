import React from "react";
import DataTable from "react-data-table-component";
import SideBar from "./SideBar";
import AdminNav from "./AdminNav";

const columns = [
  {
    name: "Name",
    selector: (row) => row.first_name + row.last_name,
  },
  {
    name: "Email",
    selector: (row) => row.email,
  },
  {
    name: "Query",
    selector: (row) => row.query,
  },

  {
    name: "Actions",
    selector: (row) => (
      <button className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
        Reply
      </button>
    ),
  },
];

const data = [
  {
    first_name: "Harper",
    last_name: "Mckinney",
    email: "harper.mckinney@example.com",
    query: "Hello My name is Harper",
  },
  {
    first_name: "Harper",
    last_name: "Mckinney",
    email: "harper.mckinney@example.com",
    query: "Hello My name is Harper",
  },
  {
    first_name: "Harper",
    last_name: "Mckinney",
    email: "harper.mckinney@example.com",
    query: "Hello My name is Harper",
  },
  {
    first_name: "Harper",
    last_name: "Mckinney",
    email: "harper.mckinney@example.com",
    query: "Hello My name is Harper",
  },
  {
    first_name: "Harper",
    last_name: "Mckinney",
    email: "harper.mckinney@example.com",
    query: "Hello My name is Harper",
  },
];

export default function ReplyQuaries() {
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
