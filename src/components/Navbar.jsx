import React, { useContext } from "react";
import { menu } from "../common";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Routes from "../router/Routes";
import { AuthContext } from "../context";
import ButtonPlain from "./ButtonPlain";

export default function Navbar() {
  const location = useLocation();
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      <nav className="bg-white border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to={Routes.home}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Qaswa Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Qaswa
            </span>
          </Link>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className=" mx-5 px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-btn-color hover:bg-btn-hover focus:ring-4 focus:outline-none focus:ring-btn-color rounded-lg text-center  h-12"
            >
              <svg
                className="w-3.5 h-3.5 text-white me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
              Base
            </button>
            {token && (
              <>
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 "
                  id="user-menu-button"
                  aria-expanded="false"
                  data-dropdown-toggle="user-dropdown"
                  data-dropdown-placement="bottom"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
                    alt="user photo"
                  />
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow  "
                  id="user-dropdown"
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 ">
                      Bonnie Green
                    </span>
                    <span className="block text-sm  text-gray-500 truncate ">
                      name@flowbite.com
                    </span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
                <button
                  data-collapse-toggle="navbar-user"
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   "
                  aria-controls="navbar-user"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>
              </>
            )}
            {!token && (
              <ButtonPlain
                text="Login"
                onClick={() => navigate(Routes.customer_sign_in)}
                borderRadius="rounded-md"
                color="bg-btn-color hover:bg-btn-hover"
              />
            )}
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {menu.map((item) => {
                return (
                  <li key={item.link}>
                    <Link
                      to={item.link}
                      className={`block py-2 px-3 md:p-0 md:dark:text-btn-color ${
                        item.link === location.pathname
                          ? "text-btn-color"
                          : "text-black"
                      }`}
                      aria-current="page"
                    >
                      {item.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
