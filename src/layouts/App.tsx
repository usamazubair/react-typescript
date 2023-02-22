import "assets/app.scss";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./Admin";
import SignIn from "views/Auth/SignIn/SignIn";
import { UserContext } from "store/contexts/userContext";

type AuthUser = {
  email: string;
  lname: string;
  fname: string;
};

function App() {
  const [signIn, setSignIn] = useState(
    localStorage.getItem("user") ? true : false
  );
  // const [userData, setUserData] = useState<AuthUser | null>({
  //   email: "",
  //   lname: "",
  //   fname: "",
  // });
  const [userData, setUserData] = useState<AuthUser>({} as AuthUser); // this can also be done if the user is set to value and cannot be null

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <Routes>
        <Route
          path="/login"
          element={<SignIn signIn={signIn} setSignIn={setSignIn} />}
        />
        <Route path="/*" element={<Admin signIn={signIn} />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
