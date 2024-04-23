import React from "react";
import TextLG from "./TextLG";
import TextError from "./TextError";

const TextAreaPlain = ({
  placeholder = "",
  onChange = null,
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
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        required={isRequired}
        onBlur={onBlur}
        name={name}
        rows={15}
        className="py-0 pl-[20px] pt-4 text-[10px] rounded shadow-lg border-2 border-gray-100 focus:ring-0 outline-btn-color md:text-[17px] placeholder:text-gray-400  focus:border-btn-color w-full"
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

export default TextAreaPlain;
