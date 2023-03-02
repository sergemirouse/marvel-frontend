import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./style.css";

import axios from "axios";

const Signup = ({ handleToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    try {
      const response = await axios.post(
        "https://site--marvel-backend--9v668jgjwvk4.code.run/user/signup",
        {
          username: username,
          email: email,
          password: password,
        }
      );
      if (response.data.token) {
        handleToken(response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error.response.data);
      console.log(error.response.status);
      if (error.response.data.message === "This email address already exists") {
        setErrorMessage(
          "This email address already exists, please use another one"
        );
      }
      if (error.response.data.message === "Missing parameter") {
        setErrorMessage("Please fill all the fields");
      }
    }
  };

  return (
    <div className="signup-page">
      <form className="signup-form" onSubmit={handleSignup}>
        <h2 className="signup-h2">SIGN UP</h2>
        <div className="label-input-container">
          <label htmlFor="username">username</label>
          <div className="input-container">
            <input
              id="username"
              type="text"
              placeholder="username"
              className="signup-input"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="label-input-container">
          <label htmlFor="email">email</label>
          <div className="input-container">
            <input
              id="email"
              type="email"
              placeholder="email"
              className="signup-input"
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
              type="password"
              placeholder="password"
              className="signup-input"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
        </div>
        <button className="signup-validation-button" type="submit">
          S'inscrire
        </button>
        {errorMessage && (
          <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>
        )}
        <div className="signup-button">
          <Link to="/user/login" className="login-way-phrase" style={{}}>
            Already have an account, connect here!
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
