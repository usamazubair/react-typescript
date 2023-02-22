//this is used to fetched another component types
import Greet from "components/Greet/Greet";
import React from "react";

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return <div>{props.name}</div>;
};
