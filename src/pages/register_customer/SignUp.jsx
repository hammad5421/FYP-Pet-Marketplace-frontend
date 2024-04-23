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
  // GooglePlacesAutoComplete,
  FileUpload,
  SelectPlain,
} from "../../components";

import { geocodeByPlaceId } from "react-google-places-autocomplete";
import { multipartConfig } from "../../config/apiConfig";

export default function SignUp() {
  const navigate = useNavigate();

  // States
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    location: {
      lat: "",
      lng: "",
      label: "",
    },
    password: "",
    avatar: "",
    interested_in: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onAvatarChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.files[0] });
  };
  const onLocationChange = async (e) => {
    const geocode = await geocodeByPlaceId(e.value.place_id);
    setData({
      ...data,
      location: {
        ...data.location,
        label: e.label,
        lat: geocode[0].geometry.location.lat(),
        lng: geocode[0].geometry.location.lng(),
      },
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("avatar", data.avatar);
    formData.append("interested_in", data.interested_in);
    formData.append("location.lat", data.location.lat);
    formData.append("location.lng", data.location.lng);
    formData.append("interested_in", data.interested_in);
    const res = await network.post(
      Url.customerSignup,
      formData,
      null,
      await multipartConfig()
    );
    setIsLoading(false);
    if (!res.ok) return WarningMessage(res.data);

    SuccessMessage(res.data);

    return navigate(Routes.customer_sign_in);
  };
  const fields = [
    {
      name: "first_name",
      label: "First Name",
      isRequired: true,
    },
    {
      name: "last_name",
      label: "Last Name",
      isRequired: true,
    },
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
    {
      name: "interested_in",
      label: "Interested In",
      options: [
        {
          text: "Local Trips",
          value: "local trips",
        },
        {
          text: "International Trips",
          value: "international trips",
        },
      ],
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
                  <div className="text-center my-10">
                    <img
                      className="mx-auto w-16"
                      src="https://flowbite.com/docs/images/logo.svg"
                      alt="logo"
                    />
                  </div>

                  <div className="grid grid-cols-12 gap-4">
                    {fields.map((field) => {
                      if (field.options) {
                        return (
                          <div
                            className={`${
                              field.span || "col-span-12 md:col-span-6"
                            }`}
                            key={field.name}
                          >
                            <SelectPlain
                              label={field.label}
                              id={field.name}
                              name={field.name}
                              value={data[field.name]}
                              isRequired={field.isRequired}
                              placeholder={field.placeholder || field.label}
                              onChange={onChange}
                              options={field.options}
                            />
                          </div>
                        );
                      } else if (field.type === "textarea") {
                        return (
                          <div
                            className={`${
                              field.span || "col-span-12 md:col-span-6"
                            }`}
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
                            className={`${
                              field.span || "col-span-12 md:col-span-6"
                            }`}
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
                      <GooglePlacesAutoComplete
                        handleOnChange={onLocationChange}
                        label="Location"
                        value={""}
                      />
                    </div>
                    <div className="col-span-12">
                      <FileUpload
                        label="Avatar"
                        id="avatar"
                        name="avatar"
                        value={data.avatar}
                        accept={
                          "image/png, image/jpeg, image/jpg, application/pdf"
                        }
                        onChange={onAvatarChange}
                      />
                    </div>
                    <div className="col-span-12">
                      <ButtonPlain
                        text="Sign Up"
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
                    <p className="mb-0 mr-2">Already Have An Account?</p>
                    <button
                      type="button"
                      onClick={() => navigate(Routes.customer_sign_in)}
                      className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      Login
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
