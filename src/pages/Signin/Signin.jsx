import React, { useState } from "react";
import Button from "../../components/Button/Button";

const Signin = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCredentials((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
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
          <a href="">Google</a>
          <a href="">Facebook</a>
        </div>
      </div>
      <div className="footer">
        Already have an account?
        <span>
          <a href="/signup">Sign Up</a>
        </span>
      </div>
    </div>
  );
};

export default Signin;
