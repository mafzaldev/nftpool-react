import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import bgImage001 from "../../assets/BGs/BG004.png";
import "./NFTDetails.css";

const NFTDetails = () => {
  const { contract, getNfts, buyNft } = nfts;
  return (
    <>
      <Navbar />
      <section className="details-container">
        <div className="details">
          <div className="details-image">
            <img src={bgImage001} alt="" />
          </div>
          <div className="details-info">
            <h1>Holographic #21</h1>
            <div className="details-info__owner">
              <h4>Owner</h4>
              <p>Staudinger</p>
            </div>
            <div className="details-info__body">
              <h4>Description</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deserunt mollitia quis voluptas quibusdam non autem doloremque
                tempora ut eveniet, voluptates nemo voluptatem temporibus
                quaerat pariatur illo tempore ex veniam nam. Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Deserunt mollitia quis
                voluptas quibusdam non autem doloremque tempora ut eveniet,
                voluptates nemo voluptatem temporibus quaerat pariatur illo
                tempore ex veniam nam. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Deserunt mollitia quis voluptas quibusdam non
                autem doloremque tempora ut eveniet, voluptates nemo voluptatem
                temporibus quaerat pariatur illo tempore ex veniam nam. Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
                mollitia quis voluptas quibusdam non autem doloremque tempora ut
                eveniet, voluptates nemo voluptatem temporibus quaerat pariatur
                illo tempore ex veniam nam. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Deserunt mollitia quis voluptas
                quibusdam non autem doloremque tempora ut eveniet, voluptates
                nemo voluptatem temporibus quaerat pariatur illo tempore ex
                veniam nam. Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Deserunt mollitia quis voluptas quibusdam non autem
                doloremque tempora ut eveniet, voluptates nemo voluptatem
                temporibus quaerat pariatur illo tempore ex veniam nam. Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
                mollitia quis voluptas quibusdam non autem doloremque tempora ut
                eveniet, voluptates nemo voluptatem temporibus quaerat pariatur
                illo tempore ex veniam nam. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Deserunt mollitia quis voluptas.
              </p>
            </div>
            <div className="details-info__misc">
              <div className="details-info__crypto">
                <h4>Crypto Value</h4>
                <p>2.74 ETH</p>
              </div>
              <div className="details-info__dollar">
                <h4>Dollar Value</h4>
                <p>$3,618.36</p>
              </div>
              <div className="details-info__upload">
                <h4>Upload Date</h4>
                <p>20-02-2020</p>
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
