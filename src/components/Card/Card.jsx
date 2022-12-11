import React from "react";
// import Button from "./Button";
import Heart from "../../assets/SVGs/Heart.svg";
import Favourite from "../../assets/SVGs/Favourite.svg";
import "./Card.css";
import Button from "../Button/Button";
export default function Card({
  nftImage,
  uploadDate,
  nftName,
  owner,
  cryptoValue,
  dollarValue,
}) {
  const bg = {
    backgroundImage: `url(${nftImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="card" style={bg}>
      <div className="upload">{uploadDate}</div>

      <div className="blurred">
        <div>
          <div className="nft-details">
            <div className="introd">
              <p className="nft-name">{nftName}</p>
              <p className="underlined">{owner}</p>
            </div>
            <div className="price">
              <p className="crypto">{cryptoValue}</p>
              <p className="dollars">{dollarValue}</p>
            </div>
          </div>
          <div className="card-buttons">
            <div className="bid">
              <Button text={"Place A bid"} width="100px" />
            </div>
            <div className="artwork">
              <Button
                text={"View Artwork"}
                width="120px" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}