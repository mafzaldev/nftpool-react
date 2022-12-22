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
              nftId={nft.tokenId}
              nftImage={nft.meta.imageLink}
              nftName={nft.meta.name}
              owner={`0x${nft.creator[2]}${nft.creator[3]}${nft.creator[4]}....${nft.creator.slice(-4)}`}
              cryptoValue={nft.price}
              dollarValue={nft.price * 1214.16}
              uploadDate={nft.meta.createdAt}
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
