import React from "react";
import Navbar from "../../Components/Navbar/Navbar";

import "./RequestBlood.scss";
import Footer from "../../Components/Footer/Footer";

export const RequestBlood = () => {
  return (
    <>
      <Navbar />
      <img
        className="Banner"
        src="src/assets/donate.png"
        alt="Blood Donation Banner"
      />
      <div className="BannerText">
        Are you in need of <span>Blood?</span>
        <p>Please fill the form below to complete the Blood Request.</p>
      </div>
      <div className="container">
        <div className="image-section">
          <img src="/src/assets/BloodPacket.png" alt="Blood Packet" />
        </div>
        <div className="form-Section">
          <form>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter first name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter Your Email" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone No.</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter Your Phone No."
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter Your Address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="dob">Date Of Birth</label>
                <input type="date" id="dob" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select id="gender">
                  <option value="">Select Your Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="bloodGroup">Blood Group</label>
                <input
                  type="text"
                  id="bloodGroup"
                  placeholder="Enter Your Blood Group"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="requisitionForm">Requisition Form</label>
              <input
                type="file"
                id="requisitionForm"
                placeholder="Upload Requisition Form"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="terms">
                  <input type="checkbox" id="terms" /> I agree to the{" "}
                  <span>Terms of Use</span> and <span>Privacy Policy.</span>
                </label>
              </div>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RequestBlood;
