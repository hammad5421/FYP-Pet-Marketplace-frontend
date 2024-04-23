import React, { useRef } from "react";
import { IconPlain } from "./index";
import { Icons } from "../common";

const FileUpload = ({
  id,
  name,
  onChange,
  label,
  value,
  isRequired,
  isDisabled,
  accept = null,
}) => {
  const ref = useRef();
  return (
    <div className="flex flex-col justify-between h-full">
      <label
        className="block text-center mb-2 text-sm font-medium text-gray-900"
        // for={id}
      >
        {label || value}
      </label>
      <div
        onClick={() => ref.current.click()}
        className={`cursor-pointer rounded border-4 flex flex-col justify-center items-center p-2 border-dashed border-btn-color`}
      >
        <Icons.FA6.FaCloudArrowUp
          className="text-center text-2xl"
          color="text-black"
        />
        <label
          className="block text-center mb-2 text-sm font-bold cursor-pointer text-btn-color"
          // for={id}
        >
          Click To Upload
        </label>
      </div>
      <input
        required={isRequired}
        disabled={isDisabled}
        ref={ref}
        accept={accept}
        className="hidden w-full text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
        id={id}
        type="file"
        name={name}
        onChange={onChange}
      />
      {/* {value && (
        <a
          href={value}
          target="_blank"
          className="bg-green-300 my-2 p-1 rounded text-center"
        >
          View File
        </a>
      )} */}
    </div>
  );
};

export default FileUpload;
