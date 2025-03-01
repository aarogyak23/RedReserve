import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup/signup";
import Login from "./Pages/Login/login";
import Home from "./Pages/Home/home";
import DonateBlood from "./Pages/DonateBlood/DonateBlood";
import ErrorBoundary from "./ErrorBoundary";
import RequestBlood from "./Pages/RequestBlood/RequestBlood";
import Aboutus from "./Pages/AboutUs/aboutus";

function Hello() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/donateblood" element={<DonateBlood />} />
          <Route path="/requestblood" element={<RequestBlood />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default Hello;
