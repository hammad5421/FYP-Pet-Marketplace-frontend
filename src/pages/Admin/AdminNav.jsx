import React from 'react';

export default function AdminNav() {
  return (
    <>
      <div className="py-2 px-6 bg-white flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
        <button type="button" className="text-lg text-gray-600 sidebar-toggle">
          <i className="ri-menu-line"></i>
        </button>
        <ul className="flex items-center text-sm ml-4">
          <li className="mr-2">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-600 font-medium"
            >
              Dashboard
            </a>
          </li>
          <li className="text-gray-600 mr-2 font-medium">/</li>
          <li className="text-gray-600 mr-2 font-medium">Analytics</li>
        </ul>
        <ul className="ml-auto flex items-center">
          <li className="dropdown ml-3">
            <button type="button" className="dropdown-toggle flex items-center">
              <img
                src="https://placehold.co/32x32"
                alt=""
                className="w-8 h-8 rounded block object-cover align-middle"
              />
            </button>
            <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
              <li>
                <a
                  href="#"
                  className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                >
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
