import React from "react";
import TextError from "./TextError";
import TextLG from "./TextLG";

const SelectPlain = ({
  label = "",
  onChange = null,
  id = "",
  name = "",
  onBlur = null,
  isRequired = false,
  error = false,
  errorText = "",
  options,
  value = "",
  placeholder = "",
}) => {
  return (
    <>
      {label && (
        <label for={id}>
          <TextLG text={isRequired ? label + " *" : label} />
        </label>
      )}

      <select
        id={id}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        value={value || placeholder}
        required={isRequired}
        className="py-0 pl-[20px] text-[10px] rounded shadow-lg border-2 border-gray-100 focus:ring-0 outline-btn-color h-[30px]  md:h-[45px] md:text-[17px] placeholder:text-gray-400  focus:border-btn-color w-full"
      >
        <option>{placeholder}</option>
        {options.map((option) => {
          return (
            <>
              <option value={option.value}>{option.text}</option>
            </>
          );
        })}
      </select>
      {error && errorText && (
        <div className="my-2">
          <TextError text={errorText} />
        </div>
      )}
    </>
  );
};

export default SelectPlain;
