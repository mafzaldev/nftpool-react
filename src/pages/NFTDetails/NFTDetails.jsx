import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./NFTDetails.css";
import { useSelector } from "react-redux";

const NFTDetails = () => {
  const nft = useSelector(state => state.nft)
  return (
    <>
      <Navbar />
      <section className="details-container">
        <div className="details">
          <div className="details-image">
            <img src={nft.nftImage} alt="" />
          </div>
          <div className="details-info">
            <h1>{nft.nftName}</h1>
            <div className="details-info__owner">
              <h4>Owner</h4>
              <p>{nft.owner}</p>
            </div>
            <div className="details-info__body">
              <h4>Description</h4>
              <p>{nft.description}</p>
            </div>
            <div className="details-info__misc">
              <div className="details-info__crypto">
                <h4>Crypto Value</h4>
                <p>{nft.cryptoValue} ETH</p>
              </div>
              <div className="details-info__dollar">
                <h4>Dollar Value</h4>
                <p>{(nft.dollarValue).toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}</p>
              </div>
              <div className="details-info__upload">
                <h4>Upload Date</h4>
                <p>{new Date(parseInt(nft.uploadDate) * 1000).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NFTDetails;
