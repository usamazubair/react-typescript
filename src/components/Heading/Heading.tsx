import React from "react";
type headingProps = {
  children: string;
};

function Heading({ children }: headingProps) {
  return <h2>{children}</h2>;
}

export default Heading;
