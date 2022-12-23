import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth, facebookProvider, googleProvider } from "../../../firebase";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import { addUser } from "../../store/user/userSlice";
import "./Signup.css";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [uid, setUid] = useState("");
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleModal = () => {
    setModalOpen((prev) => !prev);
  };
  const signIn = (provider) => {
    signInWithPopup(auth, provider)
      .catch(alert)
      .then((result) => {
        setUid(result.user.uid);
        handleModal();
      });
      
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCredentials((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (credentials.password === credentials.confirmPassword) {
      let tempUid = "";
      createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      ).then((result) => {
        tempUid = result.user.uid;
        // console.log({
        //   firstName: credentials.fname,
        //   lastName: credentials.lname,
        //   dob: credentials.dob,
        //   phone: credentials.phone,
        //   role: credentials.role,
        //   uid: result.user.uid,
        // })
        setUid(tempUid);
      });
      handleModal();
    } else {
      alert("Invalid: Password and Confirm password field should be same!");
    }
  };
  return (
    <>
      <Modal handleModal={handleModal} show={modalOpen} uid={uid} />

      <div className="container">
        <h3>Sign up to NFTPool</h3>
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
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={credentials.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              required
            />
            <Button text={"Sign Up"} width={"350px"} height={"40px"} />
          </form>
          <div className="other-options">
            <span>or continue with</span>
            <div>
          <Button onClick={() => signIn(googleProvider)} text="Google" />
          <Button onClick={() => signIn(facebookProvider)} text="Facebook" />
            </div>
          </div>
        </div>
        <div className="footer">
          Already have an account?
          <span>
            <Link to="/signin">Sign In</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Signup;
