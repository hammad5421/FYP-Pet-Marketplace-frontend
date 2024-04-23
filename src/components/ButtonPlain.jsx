import SpinnerSmall from "./SpinnerSmall";

const ButtonPlain = ({
  width = "w-28",
  height = "h-12",
  padding = "p-3",
  text = "",
  color = "bg-btn-color",
  onClick = null,
  classes = "",
  isBordered,
  border = "",
  borderRadius = "",
  isDisabled = false,
  textColor = "text-white",
  fontWeight = "font-bold",
  isLoading = false,
  type = "button",
}) => {
  return (
    <button
      onClick={onClick || null}
      className={`${width} ${height} ${padding} ${color} ${classes} ${
        isBordered && "border"
      } ${borderRadius} disabled:opacity-50 flex items-center justify-center ${border}`}
      disabled={isDisabled}
      type={type}
    >
      {isLoading ? (
        <SpinnerSmall />
      ) : (
        <span className={`text-md lg:text-lg ${textColor} ${fontWeight}`}>
          {text}
        </span>
      )}
    </button>
  );
};

export default ButtonPlain;
