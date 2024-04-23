import React from "react";
import TextLG from "./TextLG";
import TextError from "./TextError";

const InputPlain = ({
  placeholder = "",
  onChange = null,
  type = "text",
  id = "",
  name = "",
  onBlur = null,
  isRequired = false,
  error = false,
  errorText = "",
  value = "",
  label = "",
}) => {
  return (
    <>
      {label && (
        <label for={id}>
          <TextLG text={isRequired ? label + " *" : label} />
        </label>
      )}
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required={isRequired}
        onBlur={onBlur}
        name={name}
        className="py-0 pl-[20px] text-[10px] rounded shadow-lg border-2 border-gray-100 focus:ring-0 outline-btn-color h-[30px] md:h-[45px] md:text-[17px] placeholder:text-gray-400  focus:border-btn-color w-full"
        placeholder={placeholder + (isRequired ? " *" : "")}
      />
      {error && errorText && (
        <div className="my-2">
          <TextError text={errorText} />
        </div>
      )}
    </>
  );
};

export default InputPlain;
