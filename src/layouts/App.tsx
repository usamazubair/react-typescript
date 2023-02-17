import "assets/app.scss";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./Admin";
import SignIn from "views/Auth/SignIn/SignIn";

function App() {
  const [signIn, setSignIn] = useState(
    localStorage.getItem("user") ? true : false
  );
  const [userData, setUserData] = useState({ email: "", fname: "", lname: "" });

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <SignIn
            signIn={signIn}
            setSignIn={setSignIn}
            userData={userData}
            setUserData={setUserData}
          />
        }
      />
      <Route path="/*" element={<Admin signIn={signIn} />} />
    </Routes>
  );
}

export default App;
