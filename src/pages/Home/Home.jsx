import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import Main from "../../assets/SVGs/main.svg";
import "./Home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <section className="hero">
        <div className="main-content">
          <h1>Discover Rare Collections of Art & NFTs</h1>
          <p>
            NFTPOOL is the premier marketplace for Nifties, which are digital
            items you can truly own. Digital Items have existed for a long time,
            but never like this.
          </p>
          <div className="cra">
            <Button
              text={"Create NFTs -->"}
              width={"300px"}
              height={"70px"}
              onClick={() => {
                navigate("/createNft");
              }}
            />
          </div>
          <div className="counter">
            <div className="counter-item">
              <span className="value">78k</span> Active Users
            </div>
            <div className="counter-item">
              <span className="value">17K</span> Artworks
            </div>
            <div className="counter-item">
              <span className="value">2.5K</span> Artists
            </div>
          </div>
        </div>
        <div className="main-image">
          <img src={Main} alt="" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
