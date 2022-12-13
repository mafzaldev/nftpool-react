import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import Button from "../../components/Button/Button";
import { addUser } from "../../store/user/userSlice";
import "./Signup.css";

const Signup = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    fname: "",
    lname: "",
    dob: "",
    role: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCredentials((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.password === credentials.confirmPassword) {
      createUserWithEmailAndPassword(auth, credentials.email, credentials.password).then(result => {
        // dispatch(addUser({ 
        //   firstName: credentials.fname,
        //   lastName: credentials.lname,
        //   dob: credentials.dob,
        //   phone: credentials.phone,
        //   role: credentials.role,
        //   uid: result.user.uid

        //  }))
        navigate('/form')
      })
    } else {
      alert("Invalid: Password and Confirm password field should be same!");
    }
  };
  return (
    <div className="container signup-con">
      <h3>Sign up to NFTPool</h3>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <input
              type="text"
              name="fname"
              id="fname"
              value={credentials.fname}
              onChange={handleChange}
              placeholder="Enter first name"
              required
            />
            <input
              type="text"
              name="lname"
              id="lname"
              value={credentials.lname}
              onChange={handleChange}
              placeholder="Enter last name"
              required
            />
          </div>
          <input
            type="date"
            name="dob"
            id="dob"
            value={credentials.dob}
            onChange={handleChange}
            placeholder="Enter date of birth"
            required
          />
          <input
            type="text"
            name="role"
            id="role"
            value={credentials.role}
            onChange={handleChange}
            placeholder="Enter your role"
            required
          />
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
            type="phone"
            name="phone"
            id="phone"
            value={credentials.phone}
            onChange={handleChange}
            placeholder="Enter mobile number"
            required
          />
          <div className="row">
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
          </div>
          <Button text={"Sign Up"} width={"350px"} height={"40px"} />
        </form>
        <div className="other-options">
          <span>or continue with</span>
          <div>
            <a href="">Google</a>
            <a href="">Facebook</a>
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
  );
};

export default Signup;
