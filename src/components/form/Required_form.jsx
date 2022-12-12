import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import Button from "../../components/Button/Button";
import { addUser } from "../../store/user/userSlice";
import "./required_form.css";

const Required_form = () => {
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

        result => {
        dispatch(addUser({ 
          firstName: credentials.fname,
          lastName: credentials.lname,
          dob: credentials.dob,
          phone: credentials.phone,
          role: credentials.role,
          uid: result.user.uid

         }))
        //navigate('/form')
      }
    }
  return (
    <div className="container signup-con">
      <h3>One Last step </h3>
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
            <div> 
            <label for="role">Select Role: </label>
            < select name="role" id="role" required>
                <option className="row" value="artist">Artist</option>
                <option className="row" value="collector">Collector</option>
            </select>
            </div>
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
              type="text"
              name="Wallet Address"
              id="waddress"
              placeholder="Enter crypto wallet address"
              required
            />
            
          </div>
          <Button text={"Finish UP"} width={"350px"} height={"40px"} />
        </form>     
      </div>
      
    </div>
  );
};
export default Required_form;