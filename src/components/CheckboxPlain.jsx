import React from "react";
import TextError from "./TextError";
import TextLG from "./TextLG";

const CheckBoxPlain = ({
  label = "",
  onChange = null,
  id = "",
  name = "",
  isChecked = false,
  isRequired = false,
  error = false,
  errorText,
}) => {
  return (
    <>
      <div className="flex items-center">
        <input
          checked={isChecked}
          name={name}
          required={isRequired}
          id={id}
          onChange={onChange}
          type="checkbox"
          className={`w-5 h-5 text-btn-color border-gray-300 focus:ring-0 rounded-full accent-btn-color`}
        />
        {label && (
          <label for={id}>
            <TextLG text={isRequired ? label + " *" : label} classes="ml-2" />
          </label>
        )}
      </div>
      {error && errorText && (
        <div>
          <TextError text={errorText} />
        </div>
      )}
    </>
  );
};

export default CheckBoxPlain;
