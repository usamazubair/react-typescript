//how to pass the profileprop types .
import Login from "./Login";
import React from "react";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};

function Private({ isLoggedIn, component: Component }: PrivateProps) {
  if (isLoggedIn) {
    return <Component name="usama" />;
  }
  return <Login />;
}

export default Private;
