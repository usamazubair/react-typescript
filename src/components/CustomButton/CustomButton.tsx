import React from "react";

type ButtonProps = {
  //   handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void; //if to pass any parameter
  handleClick: () => void; // if there is no parameter
  //   handleClick: (event: React.MouseEvent<HTMLButtonElement>, id) => void; //if to pass multiple attributes
  name: string;
  type: "button" | "submit";
};

function CustomButton({ handleClick, name, type }: ButtonProps) {
  return (
    <button onClick={handleClick} type={type}>
      {name}
    </button>
  );
}

export default CustomButton;
