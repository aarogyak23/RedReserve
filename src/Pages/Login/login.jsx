import React from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./login.scss";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="Container">
      <Navbar />
      <div className="backgroundSection"></div>
      <div className="formSection">
        <div className="logo">
          Red<span>Reserve</span>
        </div>
        <h2>Log In</h2>
        <button className="google-button">
          <FcGoogle size={20} style={{ marginRight: "8px" }} />
          Log in with Google
        </button>
        <p className="or-divider">or</p>
        <form className="signupForm">
          <input type="email" placeholder="Enter an email" />
          <input type="password" placeholder="Enter a password" />
          <span className="helper-text"> Forgot Password?</span>

          <button type="submit" className="signup-button">
            Log in
          </button>
        </form>
        <p className="login-prompt">
          Dont have an account?{" "}
          <span className="link" onClick={() => navigate("/signup")}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};
export default Login;
