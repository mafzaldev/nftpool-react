import React from "react";
import Sample01 from "../../assets/sample01.png";
import Sample02 from "../../assets/sample02.png";
import PFPDemo from "../../assets/pfps/profile-demo.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Profile.css";
import { useSelector } from "react-redux";
const Profile = () => {
  const user = useSelector((state) => state.user.user);
  console.log(user?.photoURL);
  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="profile">
          <div className="personal-info">
            <img src={user?.photoURL} alt="" />
            <span className="name">
              {user?.firstName} {user.lastName}
            </span>
            <span className="balance">34456.323442234 ETH</span>
          </div>
          <div className="account-info">
            <div className="detail">
              <span className="field">Role</span>
              <span className="value">{user.role}</span>
            </div>
            <div className="detail">
              <span className="field">Transactions</span>
              <span className="value">19</span>
            </div>
            <div className="detail">
              <span className="field">Collection</span>
              <span className="value">9 Pcs</span>
            </div>
            <div className="detail">
              <span className="field">Phone</span>
              <span className="value">{user.phone}</span>
            </div>
            <div className="detail">
              <span className="field">Date of Birth</span>
              <span className="value">{user.dob}</span>
            </div>
            <div className="detail">
              <span className="field">Wallet</span>
              <span className="value">Metamask</span>
            </div>
          </div>
        </div>
        <div className="portfolio">
          <h3>Portfolio</h3>
          <div className="portfolio-showcase">
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
