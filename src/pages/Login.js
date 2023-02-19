import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../assets/css/Login.css";

import axios from "axios";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    try {
      const response = await axios.post(
        "https://site--marvel-backend--9v668jgjwvk4.code.run/user/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response.data);
      if (response.data.token) {
        handleToken(response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error.response.data);
      console.log(error.response.status);
      if (error.response.data.message === "Unauthorized") {
        setErrorMessage("Email address or password are not valid");
      }
    }
  };
  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="login-h2">LOGIN</h2>
        <div className="label-input-container">
          <label htmlFor="email">email</label>
          <div className="input-container">
            <input
              id="email"
              value={email}
              type="email"
              placeholder="email"
              className="login-input"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="label-input-container">
          <label htmlFor="password">password</label>
          <div className="input-container">
            <input
              id="password"
              value={password}
              type="password"
              placeholder="password"
              className="login-input"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
        </div>
        <button type="submit" className="login-validation-button">
          Login
        </button>
        {errorMessage && <p>{errorMessage}</p>}
        <Link to="/user/signup" className="signup-way-phrase">
          Not registered yet? Click here!
        </Link>
      </form>
    </div>
  );
};

export default Login;
