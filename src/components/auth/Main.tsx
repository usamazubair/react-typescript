import React from "react";
import Private from "./Private";
import Profile from "./Profile";

function Main() {
  return (
    <div>
      <Private isLoggedIn={true} component={Profile} />
    </div>
  );
}

export default Main;
