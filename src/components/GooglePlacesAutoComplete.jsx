import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const GooglePlacesAutoComplete = ({
  handleOnChange,
  label,
  value,
  error,
  errorText,
}) => {
  return (
    <div>
      <label htmlFor="places-autocomplete">{label}</label>
      <GooglePlacesAutocomplete
        selectProps={{
          onChange: handleOnChange,
          name: "property_address",
          defaultInputValue: value,
          id: "places-autocomplete",
          placeholder: "Please Enter Address",
          styles: {
            input: (provided) => ({
              ...provided,
              height: "30px",
            }),
          },
        }}
        apiKey={import.meta.env.VIE_GOOGLE_API}
      />
      {error && <p className="text-red-500 text-sm my-2">{errorText}</p>}
    </div>
  );
};

export default GooglePlacesAutoComplete;
