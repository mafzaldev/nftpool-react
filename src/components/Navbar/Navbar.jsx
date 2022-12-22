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
import { useDispatch } from "react-redux";
import { signoutUser } from "../../store/user/userSlice";
import Walletbar from "../WalletBar/WalletBar";
import { useAccount, useNetwork } from "../../hooks/web3";

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { account } = useAccount();
  const { network } = useNetwork();

  return (
    <nav>
      <input type="checkbox" id="check" />
      <div className="logo">
        <NavLink to="/">
          <img src={Logo} alt="" />
        </NavLink>
      </div>
      <div className="nav-links">
        <NavLink to="/marketplace">Marketplace</NavLink>
        <NavLink to="#">Artists</NavLink>
        <NavLink to="#/">Commmunity</NavLink>
      </div>
      <label className="ham-burger" htmlFor="check">
        <img src={Nav} alt="" className="ham" />
        <img src={Close} alt="" className="close" />
      </label>
      {!user?.uid || !auth?.currentUser ? (
        <div className="register">
          <NavLink to="/signup">
            <Button text={"Register"} width={"150px"} height={"50px"} />
          </NavLink>
        </div>
      ) : (
        <div className="register">
          <Button
            text={"Logout"}
            onClick={() => {
              dispatch(signoutUser());
              navigate("/signin");
            }}
            width={"150px"}
            height={"50px"}
          />
        </div>
      )}
      <Walletbar
        isInstalled={account.isInstalled}
        isLoading={account.isLoading}
        connect={account.connect}
        account={account.data}
        avatar={user?.photoURL}
      />
    </nav>
  );
};

export default Navbar;
