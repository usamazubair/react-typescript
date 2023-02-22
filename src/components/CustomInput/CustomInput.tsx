import React from "react";

type inputProps = {
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  name: string;
};

function CustomInput({ type, value, onChange, placeholder, name }: inputProps) {
  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {} you can also do that.

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default CustomInput;
