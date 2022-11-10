import React from "react";
import Sample01 from "../../assets/sample01.png";
import Sample02 from "../../assets/sample02.png";
import PFPDemo from "../../assets/pfps/profile-demo.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Profile.css";
const Profile = () => {
  return (
    <>
      <Navbar />
      <div class="profile-container">
        <div class="profile">
          <div class="personal-info">
            <img src={PFPDemo} alt="" />
            <span class="name">Adéwalé Rezim</span>
            <span class="balance">34456.323442234 ETH</span>
          </div>
          <div class="account-info">
            <div class="detail">
              <span class="field">Role</span>
              <span class="value">Designer</span>
            </div>
            <div class="detail">
              <span class="field">Transactions</span>
              <span class="value">19</span>
            </div>
            <div class="detail">
              <span class="field">Collection</span>
              <span class="value">9 Pcs</span>
            </div>
            <div class="detail">
              <span class="field">Phone</span>
              <span class="value">546-788-965</span>
            </div>
            <div class="detail">
              <span class="field">Date of Birth</span>
              <span class="value">28-12-90</span>
            </div>
            <div class="detail">
              <span class="field">Wallet</span>
              <span class="value">Metamask</span>
            </div>
          </div>
        </div>
        <div class="portfolio">
          <h3>Portfolio</h3>
          <div class="portfolio-showcase">
            <img src={Sample01} alt="" />
            <img src={Sample02} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
