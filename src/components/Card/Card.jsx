import React from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import "./Card.css";
import { update } from "../../store/nft";
import { useDispatch } from "react-redux";

export default function Card({
  nftId,
  nftImage,
  uploadDate,
  nftName,
  owner,
  cryptoValue,
  dollarValue,
  buyFunction
}) {
  let navigate = useNavigate();
  const bg = {
    backgroundImage: `url(${nftImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const dispatch = useDispatch();
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
              <Button text={"Place A bid"} width="120px" onClick={buyFunction}/>
            </div>
            <div className="artwork">
              <Button text={"View Artwork"} width="120px"   onClick={() => {
                dispatch(update({
                  nftId: nftId,
                  nftImage: nftImage,
                  uploadDate: uploadDate,
                  nftName: nftName,
                  owner: owner,
                  cryptoValue: cryptoValue,
                  dollarValue: dollarValue
                }))
                navigate(`/nft/${nftId}`)
                
                }}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
