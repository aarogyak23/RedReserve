import React from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./signup.scss";
import Navbar from "../../Components/Navbar/Navbar";
export const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="Container">
      <Navbar />
      <div className="backgroundSection"></div>
      <div className="formSection">
        <div className="logo">
          Red<span>Reserve</span>
        </div>
        <h2>Sign Up</h2>
        <button className="google-button">
          <FcGoogle size={20} style={{ marginRight: "8px" }} />
          Sign Up with Google
        </button>
        <p className="or-divider">or</p>
        <form className="signupForm">
          <input type="text" placeholder="Enter first name" />
          <input type="text" placeholder="Enter last name" />

          <input type="email" placeholder="Enter an email" />
          <input type="password" placeholder="Enter a password" />
          <input type="password" placeholder="Re-type the password" />
          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I agree to the <span className="link">Terms of Use</span> and{" "}
              <span className="link">Privacy Policy</span>.
            </label>
          </div>
          <button type="submit" className="signupButton">
            Sign Up
          </button>
        </form>
        <p className="login-prompt">
          Already have an account?{" "}
          <span className="link" onClick={() => navigate("/login")}>
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};
export default Signup;
