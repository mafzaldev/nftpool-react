import React from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import "./Card.css";

export default function Card({
  nftId,
  nftImage,
  uploadDate,
  nftName,
  owner,
  cryptoValue,
  dollarValue,
}) {
  let navigate = useNavigate();
  const bg = {
    backgroundImage: `url(${nftImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="card" style={bg} onClick={() => navigate(`/nft/${nftId}`)}>
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
              <Button text={"Place A bid"} width="120px" />
            </div>
            <div className="artwork">
              <Button text={"View Artwork"} width="120px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
