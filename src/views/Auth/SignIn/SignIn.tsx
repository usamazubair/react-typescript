import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type signInProps = {
  signIn: boolean;
  setSignIn: any;
  userData: { email: string; lname: string; fname: string };
  setUserData: any;
};

function SignIn({ signIn, setSignIn, userData, setUserData }: signInProps) {
  let navigate = useNavigate();

  useEffect(() => {
    if (signIn) navigate("/");
  }, [navigate, signIn]);

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
          <input
            placeholder="Please Enter Email Address"
            name="email"
            onChange={handleChange}
            value={userData.email}
          />
        </div>
        <div className="fields">
          <label>Please Write First Name:</label>
          <input
            placeholder="Please Enter Email Address"
            name="fname"
            onChange={handleChange}
            value={userData.fname}
          />
        </div>
        <div className="fields">
          <label>Please Write Last Name:</label>
          <input
            placeholder="Please Enter Email Address"
            name="lname"
            onChange={handleChange}
            value={userData.lname}
          />
        </div>
        <div className="loginButton">
          <button onClick={handleSubmit} type="button">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
