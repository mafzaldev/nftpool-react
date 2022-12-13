import React from "react";
import Icon from "../../assets/SVGs/smoothray.svg";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";

import bgImage001 from "../../assets/BGs/BG004.png";
import "./Marketplace.css";
import { useSelector } from "react-redux";

export default function Marketplace() {
  const DUMMY_NFTs = [
    {
      nftImage: bgImage001,
      nftName: "Holographic #21",
      owner: "Staudinger",
      cryptoValue: "2.74 ETH",
      dollarValue: "$3,618.36",
      uploadDate: "20-02-2020",
    },
    {
      nftImage: bgImage001,
      nftName: "Holographic #21",
      owner: "Staudinger",
      cryptoValue: "2.74 ETH",
      dollarValue: "$3,618.36",
      uploadDate: "20-02-2020",
    },
    {
      nftImage: bgImage001,
      nftName: "Holographic #21",
      owner: "Staudinger",
      cryptoValue: "2.74 ETH",
      dollarValue: "$3,618.36",
      uploadDate: "20-02-2020",
    },
  ];
  const provider = useSelector(state => state.web3Api.provider)
  const test = async () => {
    console.log(await provider?.listAccounts())
  }
  test()
  return (
    <>
      <Navbar />
      <section className="explore">
        <div className="header">
          <div className="heading">
            <span>
              <img src={Icon} alt="" />
            </span>
            <h1>Explore NFTs collection</h1>
            <span>
              <img src={Icon} alt="" />
            </span>
          </div>
          {/* <div className="filters">
          <Filter styleClass={"filter"} text={"Categories"} />
          <Filter styleClass={"filter"} text={"Status"} />
          <Filter styleClass={"filter"} text={"Price Range"} />
          <Filter styleClass={"filter-selected"} text={"Newest"} />
        </div> */}
        </div>
        <div className="nfts-grid">
          {DUMMY_NFTs.map((nft) => (
            <Card
              nftImage={nft.nftImage}
              nftName={nft.nftName}
              owner={nft.owner}
              cryptoValue={nft.cryptoValue}
              dollarValue={nft.dollarValue}
              uploadDate={nft.uploadDate}
            />
          ))}
        </div>
      </section>
    </>
  );
}
