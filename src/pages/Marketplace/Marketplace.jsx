import React from "react";
import Icon from "../../assets/SVGs/smoothray.svg";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";

import bgImage001 from "../../assets/BGs/BG004.png";
import "./Marketplace.css";
import { useSelector } from "react-redux";
import { useListedNfts } from "../../hooks/web3";
import { useEffect } from "react";
import { useState } from "react";

export default function Marketplace() {
  const { nfts } = useListedNfts();
  const { contract, getNfts, buyNft } = nfts;
  const [ nftList, setNftList ] = useState([])
  useEffect(()=>{
    getNfts().then(res => {
      setNftList(res);
    })
  }, [])
  
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
          {nftList.map((nft) => (
            <Card
              key={nft.tokenId}
              nftId={nft.tokenId}
              nftImage={nft.meta.imageLink}
              nftName={nft.meta.name}
              owner={nft.creator}
              cryptoValue={nft.price}
              dollarValue={nft.price * 1214.16}
              uploadDate={nft.meta.createdAt}
              description={nft.meta.description}
              buyFunction={()=>{
                buyNft(nft.tokenId, nft.price);
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
}
