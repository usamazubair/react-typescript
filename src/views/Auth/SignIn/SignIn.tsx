import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import CustomButton from "components/CustomButton/CustomButton";
import CustomInput from "components/CustomInput/CustomInput";
import { useUserContext } from "store/contexts/userContext";
import Timer from "components/Timer/Timer";

type signInProps = {
  signIn: boolean;
  setSignIn: any;
};

function SignIn({ signIn, setSignIn }: signInProps) {
  const { userData, setUserData } = useUserContext();
  let navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null!); //if you dont use inputRef.current?.focus, right null!

  useEffect(() => {
    if (signIn) navigate("/");
  }, [navigate, signIn]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e: any) => {
    var name = e.target.name;
    setUserData({ ...userData, [name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(userData);
    setSignIn(true);
    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/");
  };

  return (
    <div className="loginContent">
      <h1>Login Form</h1>
      <div className="loginForm">
        <div className="fields">
          <label>Please Write Email:</label>
          <CustomInput
            placeholder="Please Enter Email Address"
            name="email"
            onChange={handleChange}
            value={userData?.email}
          />
        </div>
        <div className="fields">
          <label>Please Write First Name:</label>
          <CustomInput
            placeholder="Please Enter Email Address"
            name="fname"
            onChange={handleChange}
            value={userData?.fname}
          />
        </div>
        <div className="fields">
          <label>Please Write Last Name:</label>
          <input
            ref={inputRef}
            placeholder="Please Enter Email Address"
            name="lname"
            onChange={handleChange}
            value={userData?.lname}
          />
        </div>
        <div className="loginButton">
          <CustomButton handleClick={handleSubmit} name="Login" type="button" />
        </div>
      </div>
      <Timer />
    </div>
  );
}

export default SignIn;
