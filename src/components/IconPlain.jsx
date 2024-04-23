import React from "react";

const IconPlain = ({
  bgColor = "",
  isRounded = false,
  wrapperSize = "",
  padding = "",
  children,
}) => {
  const className = `${bgColor} ${wrapperSize} flex items-center justify-center ${padding} ${
    isRounded ? "rounded-full" : ""
  }`;

  return <div className={className}>{children}</div>;
};

export default IconPlain;

// Example Usage

/**
 *  <IconPlain bgColor="bg-green-500" isRounded>
        <Icons.FA6.FaExclamation />
    </IconPlain>
 */
