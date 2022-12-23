import React from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import "./Card.css";
import { update } from "../../store/nft";
import { useDispatch, useSelector } from "react-redux";

export default function Card({
  nftId,
  nftImage,
  uploadDate,
  nftName,
  owner,
  cryptoValue,
  dollarValue,
  buyFunction,
  description
}) {
  let navigate = useNavigate();
  var nft1 = useSelector(state => state.nft);
  const bg = {
    backgroundImage: `url(${nftImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const dispatch = useDispatch();
  return (
    <div className="card" style={bg} >
      <div className="upload">{new Date(parseInt(uploadDate) * 1000).toLocaleDateString()}</div>
      <div className="blurred">
        <div>
          <div className="nft-details">
            <div className="introd">
              <p className="nft-name">{nftName}</p>
              <p className="underlined">{`0x${owner[2]}${owner[3]}${owner[4]}....${owner.slice(-4)}`}</p>
            </div>
            <div className="price">
              <p className="crypto">{cryptoValue} ETH</p>
              <p className="dollars">{(dollarValue).toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}</p>
            </div>
          </div>
          <div className="card-buttons">
            <div className="bid">
              <Button text={"Purchase"} width="120px" onClick={buyFunction}/>
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
                  dollarValue: dollarValue,
                  description: description
                }))
                navigate(`/nft/${nftName}`)
                
                }}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
