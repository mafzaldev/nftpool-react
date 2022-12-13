import React, { useState } from "react";
import {
  auth,
  googleProvider,
  emailProvider,
  facebookProvider,
} from "../../../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Button from "../../components/Button/Button";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../store/user/userSlice";
import { Link } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const signIn = (provider) => {
    signInWithPopup(auth, provider)
      .catch(alert)
      .then((result) => {
        dispatch(
          fetchUser({ photoURL: result.user.photoURL, uid: result.user.uid })
        );
        navigate("/");
      });
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCredentials((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    ).then((result) => {
      dispatch(
        fetchUser({ photoURL: result.user.photoURL, uid: result.user.uid })
      );
      navigate("/");
    });
  };

  return (
    <div className="container">
      <h3>Sign in to NFTPool</h3>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Enter email address"
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />
          <Button text={"Sign In"} width={"350px"} height={"40px"} />
        </form>
        <div className="other-options">
          <span>or continue with</span>
          <Button onClick={() => signIn(googleProvider)} text="Google" />
          <Button onClick={() => signIn(facebookProvider)} text="Facebook" />
        </div>
      </div>
      <div className="footer">
        Don't have an account?
        <span>
          <Link to="/signup">Sign Up</Link>
        </span>
      </div>
    </div>
  );
};

export default Signin;
