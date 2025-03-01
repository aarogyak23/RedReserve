import React from "react";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <img
        onClick={() => navigate("/home")}
        className="logoImage"
        src="/src/assets/Screenshot 2025-02-18 at 11.16.18.png"
        alt="Logo"
      />
      <nav className="navbar">
        <a onClick={() => navigate("/home")}>Home</a>
        <a onClick={() => navigate("/donateblood")}>Donate Blood</a>
        <a onClick={() => navigate("/requestblood")}>Request Blood</a>
        <a onClick={() => navigate("/aboutus")}>About Us</a>
        <a href="/home">Campaigns</a>
        <a href="/home">Search</a>
        <span className="navButton active" onClick={() => navigate("/login")}>
          Log In
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
