import React from "react";
import Sample01 from "../../assets/sample01.png";
import Sample02 from "../../assets/sample02.png";
import PFPDemo from "../../assets/pfps/profile-demo.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Profile.css";
import { useSelector } from "react-redux";
import { useListedNfts } from "../../hooks/web3";
import { useState } from "react";
import { useEffect } from "react";
const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const { nfts } = useListedNfts();
  const { contract, getNfts, buyNft } = nfts;
  const [ data, setData ] = useState({
    transactions: "",
    collections: "",
    balance: "",
  })
  useEffect(() => {
    const func = async () => {
      let transactions = await contract?.getTransactions();
    let collections = await contract?.getOwnedNfts();
    //let balance = await
    setData({
      ...data,
      transactions:transactions.toNumber(),
      collections:collections.length,
    })
    }
    func();
    return () => console.log("hello");
  })
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
            <span className="balance">{data.balance} ETH</span>
          </div>
          <div className="account-info">
            <div className="detail">
              <span className="field">Role</span>
              <span className="value">{user.role}</span>
            </div>
            <div className="detail">
              <span className="field">Transactions</span>
              <span className="value">{data.transactions}</span>
            </div>
            <div className="detail">
              <span className="field">Collection</span>
              <span className="value">{data.collections} Pcs</span>
            </div>
            <div className="detail">
              <span className="field">Phone</span>
              <span className="value" style={{"fontSize":11}}>{user.phone}</span>
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
