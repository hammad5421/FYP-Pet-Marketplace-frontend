import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Routes from "../../router/Routes";
import { Url, network } from "../../config";
import {
  ButtonPlain,
  InputPlain,
  SuccessMessage,
  TextAreaPlain,
  WarningMessage,
} from "../../components";

import { useAuth } from "../../hooks";

export default function SignIn() {
  const navigate = useNavigate();
  const { initializeUser } = useAuth();

  // States
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await network.post(Url.customerSignIn, data);
    setIsLoading(false);
    if (!res.ok) return WarningMessage(res.data);

    initializeUser(res.data);

    SuccessMessage("Logged In");

    setData({
      email: "",
      password: "",
    });
    return navigate(Routes.home);
  };
  const fields = [
    {
      name: "email",
      label: "Email",
      type: "email",
      isRequired: true,
    },

    {
      name: "password",
      label: "Password",
      type: "password",
      isRequired: true,
    },
  ];
  return (
    <div className="g-6 flex flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
      <div className="w-full">
        <div className="block bg-white shadow-lg dark:bg-neutral-800">
          <div className="g-0 lg:flex lg:flex-wrap h-screen">
            {/* <!-- Left column container--> */}
            <div className="px-4 md:px-0 lg:w-6/12 h-screen">
              <div className="md:mx-6 md:p-12 h-full flex items-center justify-center">
                <div>
                  {/* <!--Logo--> */}
                  <div className="text-center">
                    <img
                      className="mx-auto w-16"
                      src="https://flowbite.com/docs/images/logo.svg"
                      alt="logo"
                    />
                  </div>

                  <div className="grid grid-cols-12 gap-4">
                    {fields.map((field) => {
                      if (field.type === "textarea") {
                        return (
                          <div
                            className={`${field.span || "col-span-12"}`}
                            key={field.name}
                          >
                            <TextAreaPlain
                              label={field.label}
                              id={field.name}
                              name={field.name}
                              value={data[field.name]}
                              isRequired={field.isRequired}
                              placeholder={field.placeholder || field.label}
                              onChange={onChange}
                            />
                          </div>
                        );
                      } else {
                        return (
                          <div
                            className={`${field.span || "col-span-12"}`}
                            key={field.name}
                          >
                            <InputPlain
                              label={field.label}
                              type={field.type}
                              id={field.name}
                              name={field.name}
                              value={data[field.name]}
                              isRequired={field.isRequired}
                              placeholder={field.placeholder || field.label}
                              onChange={onChange}
                            />
                          </div>
                        );
                      }
                    })}
                    <div className="col-span-12">
                      <ButtonPlain
                        text="Sign In"
                        color="bg-gray-700"
                        borderRadius="rounded-full"
                        onClick={onSubmit}
                        isLoading={isLoading}
                        width="w-40"
                        isDisabled={isLoading}
                        type="submit"
                      />
                    </div>
                  </div>

                  {/* <!--Register button--> */}
                  <div className="flex items-center justify-between py-6">
                    <p className="mb-0 mr-2">Don't have an account?</p>
                    <button
                      type="button"
                      onClick={() => navigate(Routes.customer_sign_up)}
                      className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Right column container with background and description--> */}
            <div
              className=" items-center hidden lg:flex bg-gray-700 rounded-b-lg lg:w-6/12"
              // Style="background: linear-gradient(to right, #1b7d75, #ed9f30)"
            >
              <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                <h4 className="mb-6 text-xl font-semibold">
                  We are more than just a company
                </h4>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
