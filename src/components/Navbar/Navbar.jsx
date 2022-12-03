import React from "react";
import Logo from "../../assets/SVGs/nftpool-logo.svg";
import Nav from "../../assets/SVGs/nav.svg";
import Close from "../../assets/SVGs/close.svg";
import Button from "../../components/Button/Button";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  return (
    <nav>
      <input type="checkbox" id="check" />
      <div className="logo">
        <NavLink to="/">
          <img src={Logo} alt="" />
        </NavLink>
      </div>
      <div className="nav-links">
        <a href="#/">Marketplace</a>
        <a href="#/">Artists</a>
        <a href="#/">Commmunity</a>
      </div>
      <label className="ham-burger" htmlFor="check">
        <img src={Nav} alt="" className="ham" />
        <img src={Close} alt="" className="close" />
      </label>
      <div className="register">
        <NavLink to="/signup">
          <Button text={"Register"} width={"150px"} height={"50px"} />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
