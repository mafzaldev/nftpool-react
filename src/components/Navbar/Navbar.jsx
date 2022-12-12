import React from "react";
import Logo from "../../assets/SVGs/nftpool-logo.svg";
import Nav from "../../assets/SVGs/nav.svg";
import Close from "../../assets/SVGs/close.svg";
import Button from "../../components/Button/Button";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";



const Navbar = () => {
  const user = useSelector(state => state.user.user)
  const navigate = useNavigate()
  return (
    <nav>
      <input type="checkbox" id="check" />
      <div className="logo">
        <NavLink to="/">
          <img src={Logo} alt="" />
        </NavLink>
      </div>
      <div className="nav-links">
        <NavLink to="/market">Marketplace</NavLink>
        <NavLink to="#">Artists</NavLink>
        <NavLink to="#/">Commmunity</NavLink>
      </div>
      <label className="ham-burger" htmlFor="check">
        <img src={Nav} alt="" className="ham" />
        <img src={Close} alt="" className="close" />
      </label>
      {
        !user?.uid ?
          (
            <div className="register">
              <NavLink to="/signup">
                <Button text={"Register"} width={"150px"} height={"50px"} />
              </NavLink>
            </div>
          ) : (
            <div className="register">
              <NavLink to="/profile">
              <img className="img-profile" src={user?.photoURL }>
              </img>
              </NavLink> 
                  <Button text={"Logout"} onClick={()=>{
                  signOut(auth);
                  navigate('/signin');
                }} width={"150px"} height={"50px"} />
              </div>
              )
      }
            </nav>
          );
};

      export default Navbar;
