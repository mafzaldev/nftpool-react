import React, { useState } from "react";
import Button from "../../components/Button/Button";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    email: "",
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
      console.log(credentials);
    } else {
      alert("Invalid: Password and Confirm password field should be same!");
    }
  };
  return (
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
          <a href="">Google</a>
          <a href="">Facebook</a>
        </div>
      </div>
      <div className="footer">
        Already have an account?
        <span>
          <a href="/signin">Sign In</a>
        </span>
      </div>
    </div>
  );
};

export default Signup;
