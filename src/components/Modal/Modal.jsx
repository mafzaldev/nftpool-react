import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/user/userSlice";
import Button from "../../components/Button/Button";
import Backdrop from "./Backdrop";

import "./Modal.css";

const ModalOverlay = ({ uid, handleModal }) => {
  const [credentials, setCredentials] = useState({
    fname: "",
    lname: "",
    dob: "",
    role: "",
    phone: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCredentials((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      firstName: credentials.fname,
      lastName: credentials.lname,
      dob: credentials.dob,
      phone: credentials.phone,
      role: credentials.role,
      uid: uid,
    });
    dispatch(
      addUser({
        firstName: credentials.fname,
        lastName: credentials.lname,
        dob: credentials.dob,
        phone: credentials.phone,
        role: credentials.role,
        uid,
      })
    );
    handleModal();
  };

  const content = (
    <div onClick={(e) => e.stopPropagation()} className="modal">
      <form className="form" onSubmit={handleSubmit}>
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

        <select
          name="role"
          id="role"
          className="dropdown"
          value={credentials.role}
          onChange={handleChange}
          required
        >
          <option value="" disabled selected>
            Select your option
          </option>
          <option value="artist">Artist</option>
          <option value="collector">Collector</option>
        </select>
        <input
          type="phone"
          name="phone"
          id="phone"
          value={credentials.phone}
          onChange={handleChange}
          placeholder="Enter mobile number"
          required
        />
        <Button text={"Confirm details"} width={"350px"} height={"40px"} />
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal"));
};

const Modal = (props) => {
  return (
    <>
      {props.show && <Backdrop />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay uid={props.uid} handleModal={props.handleModal} />
      </CSSTransition>
    </>
  );
};

export default Modal;
